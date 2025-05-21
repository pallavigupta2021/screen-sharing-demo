import React from 'react';
import { useState, useRef } from 'react';
import './ScreenShare.css';

const ScreenShare = () => {
  const [sharing, setSharing] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [error, setError] = useState<string>('');
  
  const startSharing = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
        audio: false,
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
        
        // When user stops sharing via browser UI
        mediaStream.getVideoTracks()[0].onended = () => {
          stopSharing();
        };
        
        setSharing(true);
        setError('');
      }
    } catch (err) {
      setError('Failed to start screen sharing: ' + (err instanceof Error ? err.message : String(err)));
      console.error('Error starting screen share:', err);
    }
  };
  
  const stopSharing = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
      tracks.forEach(track => track.stop());
      videoRef.current.srcObject = null;
    }
    setSharing(false);
  };
  
  return (
    
    <div className="screen-share-container">
      <div className="video-container">
        <video 
          ref={videoRef} 
          autoPlay 
          playsInline 
          muted 
          className={sharing ? 'active' : ''}
        />
        
        {!sharing && (
          <div className="placeholder">
            <p>No screen is being shared</p>
          </div>
        )}
      </div>
      
      <div className="controls">
        {!sharing ? (
          <button onClick={startSharing} className="share-button">
            Start Screen Sharing
          </button>
        ) : (
          <button onClick={stopSharing} className="stop-button">
            Stop Sharing
          </button>
        )}
      </div>
      
      {error && <p className="error">{error}</p>}
    </div>
    
  );
};

export default ScreenShare;




