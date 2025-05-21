# Screen Sharing Demo

A simple React TypeScript demo for screen sharing using the browser's WebRTC capabilities.

## Features

- Start/stop screen sharing
- Display the shared screen in real-time
- Error handling for unsupported browsers or denied permissions

## How to Run

1. Clone this repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Browser Support

This demo uses the `getDisplayMedia` API which is supported in:
- Chrome 72+
- Firefox 66+
- Edge 79+
- Safari 13+

## Notes

- Screen sharing requires HTTPS in production environments
- Some browsers may require additional permissions