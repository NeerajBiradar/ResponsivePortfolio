export default function TextDipserse({children}) {
  
    const getChars = (element) => {
      let chars = [];
      const word = element.props.children
      word.split("").forEach( (char, i) => {
        chars.push(<span key={char + i}>{char}</span>)
      })
      return chars;
    }
  
    return (
      <div className='introLine'>
      { getChars(children) }
      </div>
    )
  }