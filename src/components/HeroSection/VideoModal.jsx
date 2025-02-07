import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import shaka from 'shaka-player/dist/shaka-player.ui.js';
import 'shaka-player/dist/controls.css';

function VideoModal({ isOpen, onClose }) {
  const ref = useRef(null);

  useEffect(() => {
    if (isOpen && ref.current) {
      // Initialize the player when the modal opens

      // Install built-in polyfills to patch browser incompatibilities.
      shaka.polyfill.installAll();

      // Create a Player instance.
      const player = new shaka.Player(ref.current);

      // Attach the player to the window for easy access in the JS console.
      window.player = player;

      // Configure DRM
      player.configure({
        drm: {
          servers: {
            'com.widevine.alpha': 'https://cwip-shaka-proxy.appspot.com/no_auth',
          },
        },
      });

      // Function to handle errors
      function onError(error) {
        console.error('Error code', error.code, 'object', error);
      }

      // Listen for error events.
      player.addEventListener('error', (event) => {
        onError(event.detail);
      });

      // Load the manifest (DRM-protected content)
      const manifestUri =
        'https://storage.googleapis.com/shaka-demo-assets/angel-one-widevine/dash.mpd';

      player.load(manifestUri).catch(onError);
    }

    // Clean up function when the component unmounts or isOpen changes
    return () => {
      if (window.player) {
        window.player.destroy();
      }
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
      <div className="relative w-full max-w-3xl bg-black rounded">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-2xl font-bold z-10"
        >
          &times;
        </button>
        <video
          ref={ref}
          className="w-full h-full"
          poster="https://shaka-player-demo.appspot.com/assets/poster.jpg"
          controls
          autoPlay
        ></video>
      </div>
    </div>
  );
}

VideoModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default VideoModal;