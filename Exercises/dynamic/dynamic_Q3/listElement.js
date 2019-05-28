
      const allNames = ['McNulty', 'Jennings', 'Snyder',
                        'Meltzer', 'Bilas', 'Lichterman']

      const ListElement = (props) =>
            (<li id={props.name}><em>{props.name}</em></li>)

      ReactDOM.render(
        <ul>{allNames.map((name) => <ListElement name={name} /> )}</ul>,
        document.getElementById('app')
      )