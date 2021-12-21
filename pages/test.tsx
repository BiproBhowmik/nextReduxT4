import React from 'react'

function test(event: any) {
  return (
    <div>
      Hello
    </div>
  )
}

export default class Test extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      date: {
        now: 1,
        then: "then",
      },
      is: false,
    };
  }

  render() {
    return (
      <div>
        <button onClick={(e) => test(e)}>Click</button>
        <h1>Hello, Time!</h1>
      </div>
    );
  }
}