
import React, { useEffect, useRef, useState } from 'react';
import { GoogleGenAI, LiveServerMessage, Modality } from '@google/genai';
import AnimatedLogo from './AnimatedLogo';

const LiveStrategyAI: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [status, setStatus] = useState<'idle' | 'connecting' | 'active' | 'error'>('idle');
  const [transcription, setTranscription] = useState<string[]>([]);
  const [isMuted, setIsMuted] = useState(false);
  
  const audioContextRef = useRef<AudioContext | null>(null);
  const nextStartTimeRef = useRef(0);
  const sessionRef = useRef<any>(null);
  const sourcesRef = useRef<Set<AudioBufferSourceNode>>(new Set());
  const streamRef = useRef<MediaStream | null>(null);
  const analyzerRef = useRef<AnalyserNode | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const decode = (base64: string) => {
    const binaryString = atob(base64);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
  };

  const decodeAudioData = async (data: Uint8Array, ctx: AudioContext, sampleRate: number, numChannels: number): Promise<AudioBuffer> => {
    const dataInt16 = new Int16Array(data.buffer);
    const frameCount = dataInt16.length / numChannels;
    const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);
    for (let channel = 0; channel < numChannels; channel++) {
      const channelData = buffer.getChannelData(channel);
      for (let i = 0; i < frameCount; i++) {
        channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
      }
    }
    return buffer;
  };

  const createBlob = (data: Float32Array): any => {
    const int16 = new Int16Array(data.length);
    for (let i = 0; i < data.length; i++) {
      int16[i] = data[i] * 32768;
    }
    const bytes = new Uint8Array(int16.buffer);
    let binary = '';
    for (let i = 0; i < bytes.byteLength; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return {
      data: btoa(binary),
      mimeType: 'audio/pcm;rate=16000',
    };
  };

  const startSession = async () => {
    try {
      setStatus('connecting');
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const inputCtx = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 16000 });
      const outputCtx = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
      audioContextRef.current = outputCtx;

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;

      const sessionPromise = ai.live.connect({
        model: 'gemini-2.5-flash-native-audio-preview-09-2025',
        callbacks: {
          onopen: () => {
            setStatus('active');
            const source = inputCtx.createMediaStreamSource(stream);
            const scriptProcessor = inputCtx.createScriptProcessor(4096, 1, 1);
            
            // Visualizer setup
            const analyzer = inputCtx.createAnalyser();
            source.connect(analyzer);
            analyzerRef.current = analyzer;

            scriptProcessor.onaudioprocess = (e) => {
              if (isMuted) return;
              const inputData = e.inputBuffer.getChannelData(0);
              const pcmBlob = createBlob(inputData);
              sessionPromise.then(session => session.sendRealtimeInput({ media: pcmBlob }));
            };
            source.connect(scriptProcessor);
            scriptProcessor.connect(inputCtx.destination);
          },
          onmessage: async (message: LiveServerMessage) => {
            if (message.serverContent?.outputTranscription) {
              const text = message.serverContent.outputTranscription.text;
              setTranscription(prev => [...prev.slice(-3), `AI: ${text}`]);
            } else if (message.serverContent?.inputTranscription) {
              const text = message.serverContent.inputTranscription.text;
              setTranscription(prev => [...prev.slice(-3), `You: ${text}`]);
            }

            const base64Audio = message.serverContent?.modelTurn?.parts[0]?.inlineData?.data;
            if (base64Audio) {
              nextStartTimeRef.current = Math.max(nextStartTimeRef.current, outputCtx.currentTime);
              const audioBuffer = await decodeAudioData(decode(base64Audio), outputCtx, 24000, 1);
              const source = outputCtx.createBufferSource();
              source.buffer = audioBuffer;
              source.connect(outputCtx.destination);
              source.start(nextStartTimeRef.current);
              nextStartTimeRef.current += audioBuffer.duration;
              sourcesRef.current.add(source);
              source.onended = () => sourcesRef.current.delete(source);
            }

            if (message.serverContent?.interrupted) {
              sourcesRef.current.forEach(s => s.stop());
              sourcesRef.current.clear();
              nextStartTimeRef.current = 0;
            }
          },
          onerror: (e) => {
            console.error('Live AI Error:', e);
            setStatus('error');
          },
          onclose: () => {
            setStatus('idle');
          }
        },
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Zephyr' } } },
          systemInstruction: 'You are a world-class strategic consultant at Epiphany Unlimited. Your voice is calm, human, and professional. You provide empathetic, empowering, and enlightening business advice. Keep responses concise and focus on clarity and flow.',
          outputAudioTranscription: {},
          inputAudioTranscription: {},
        }
      });

      sessionRef.current = await sessionPromise;
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  useEffect(() => {
    startSession();
    
    // Animation loop for visualizer
    let animationId: number;
    const draw = () => {
      if (canvasRef.current && analyzerRef.current) {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d')!;
        const analyzer = analyzerRef.current;
        const dataArray = new Uint8Array(analyzer.frequencyBinCount);
        analyzer.getByteFrequencyData(dataArray);

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        const sliceWidth = canvas.width / dataArray.length;
        let x = 0;
        for (let i = 0; i < dataArray.length; i++) {
          const v = dataArray[i] / 128.0;
          const y = (v * canvas.height) / 2;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
          x += sliceWidth;
        }
        ctx.lineTo(canvas.width, canvas.height / 2);
        ctx.strokeStyle = '#60a5fa';
        ctx.lineWidth = 2;
        ctx.stroke();
      }
      animationId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animationId);
      if (streamRef.current) streamRef.current.getTracks().forEach(t => t.stop());
      if (sessionRef.current) sessionRef.current.close();
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[500] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4">
      <div className="glass-card w-full max-w-2xl rounded-[3rem] p-12 relative overflow-hidden flex flex-col items-center text-center">
        <div className="absolute inset-0 blueprint-bg opacity-[0.03] pointer-events-none"></div>
        
        <button onClick={onClose} className="absolute top-8 right-8 text-white/30 hover:text-white transition-all z-20">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>

        <div className="mb-8 relative">
          <div className={`absolute inset-0 rounded-full blur-[40px] transition-colors duration-1000 ${status === 'active' ? 'bg-blue-500/30' : 'bg-white/10'}`}></div>
          <AnimatedLogo className="h-24 w-24 relative z-10" />
        </div>

        <h2 className="text-3xl font-geist font-bold mb-2 tracking-tighter text-[#000810]">Live Strategy Session</h2>
        <div className="flex items-center gap-2 mb-12">
          <div className={`w-2 h-2 rounded-full animate-pulse ${status === 'active' ? 'bg-emerald-500' : 'bg-gray-400'}`}></div>
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#000810]/60">
            {status === 'connecting' ? 'Calibrating Frequencies...' : status === 'active' ? 'Session In Sync' : 'Initializing...'}
          </span>
        </div>

        <div className="w-full h-32 mb-8 bg-black/10 rounded-3xl relative overflow-hidden border border-[#000810]/5">
          <canvas ref={canvasRef} width={600} height={128} className="w-full h-full opacity-60" />
          {status === 'active' && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="text-[10px] text-[#000810]/30 uppercase font-black tracking-widest animate-pulse">Speak freely...</span>
            </div>
          )}
        </div>

        <div className="w-full space-y-3 mb-12 min-h-[100px] flex flex-col justify-end">
          {transcription.map((line, i) => (
            <p key={i} className={`text-sm font-medium ${line.startsWith('AI:') ? 'text-[#000810]' : 'text-[#000810]/50'} animate-in fade-in slide-in-from-bottom-2`}>
              {line}
            </p>
          ))}
        </div>

        <div className="flex gap-6">
          <button 
            onClick={() => setIsMuted(!isMuted)}
            className={`w-16 h-16 rounded-full flex items-center justify-center transition-all border-2 ${isMuted ? 'bg-red-500/20 border-red-500/40 text-red-600' : 'bg-[#000810]/5 border-[#000810]/10 text-[#000810]'}`}
          >
            {isMuted ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1l22 22"></path></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>
            )}
          </button>
          
          <button 
            onClick={onClose}
            className="px-10 h-16 bg-[#000810] text-white rounded-[1.5rem] font-black uppercase tracking-widest text-xs hover:shadow-2xl active:scale-95 transition-all flex items-center gap-3"
          >
            Terminate Session
          </button>
        </div>
      </div>
    </div>
  );
};

export default LiveStrategyAI;
