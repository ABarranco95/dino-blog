import './App.css';

function App(props) {
  return (
    <div className="App">
      <h1>{props.post.title}</h1>
      <p>{props.post.author}</p>
      <p>{props.post.body}</p>

      <div className='comments'>
        <h3>Comments</h3>
        <p>{props.post.comments[0]}</p>
      </div>
      
    </div>
  );
}

export default App;
