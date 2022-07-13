import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';

const App = () => {
  const commands = [
    {
      command: 'reset',
      callback: ({ resetTranscript }) => {
        resetTranscript();
      },
    },
    {
      command: 'clear',
      callback: ({ resetTranscript }) => resetTranscript(),
    },
    {
      command: 'open *',
      callback: site => {
        window.open('http://' + site);
      },
    },
    {
      command: 'increase font size',
      callback: () => {
        document.getElementById('content').style.fontSize = '22px';
      },
    },
    {
      command: 'decrease font size',
      callback: () => {
        document.getElementById('content').style.fontSize = '16px';
      },
    },
    {
      command: 'change text color to *',
      callback: color => {
        document.getElementById('content').style.color = color;
      },
    },
  ];

  SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition(
    {
      commands,
    }
  );

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  return (
    <div className="container">
      <div className="nav">
        <h1>Please Say Something...</h1>
        <h3>
          Example: "reset", "clear", "increase font size", "decrease font size"
        </h3>
      </div>
      <div id="content">{transcript}</div>
    </div>
  );
};

export default App;
