import React, { Component } from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'book' // can be 'book', 'blog', or 'course'
    };
  }

  // Technique 1: if-else statement inside a regular function
  renderWithIfElse() {
    if (this.state.selected === 'book') {
      return <BookDetails />;
    } else if (this.state.selected === 'blog') {
      return <BlogDetails />;
    } else {
      return <CourseDetails />;
    }
  }

  // Technique 2: switch-case statement inside a regular function
  renderWithSwitch() {
    switch (this.state.selected) {
      case 'book':
        return <BookDetails />;
      case 'blog':
        return <BlogDetails />;
      case 'course':
        return <CourseDetails />;
      default:
        return null;
    }
  }

  render() {
    const { selected } = this.state;

    // Technique 3: Element variable - assign JSX to a variable before returning
    let elementVariable;
    if (selected === 'book') {
      elementVariable = <BookDetails />;
    } else if (selected === 'blog') {
      elementVariable = <BlogDetails />;
    } else {
      elementVariable = <CourseDetails />;
    }

    return (
      <div>
        <h1>Blogger App</h1>
        <button onClick={() => this.setState({ selected: 'book' })}>Book</button>
        <button onClick={() => this.setState({ selected: 'blog' })}>Blog</button>
        <button onClick={() => this.setState({ selected: 'course' })}>Course</button>

        <h2>1. Conditional Rendering with if-else</h2>
        {this.renderWithIfElse()}

        <h2>2. Conditional Rendering with switch-case</h2>
        {this.renderWithSwitch()}

        <h2>3. Conditional Rendering with an Element Variable</h2>
        {elementVariable}

        <h2>4. Conditional Rendering with Ternary Operator</h2>
        {selected === 'book' ? (
          <BookDetails />
        ) : selected === 'blog' ? (
          <BlogDetails />
        ) : (
          <CourseDetails />
        )}

        <h2>5. Conditional Rendering with Logical &amp;&amp; Operator</h2>
        {selected === 'book' && <BookDetails />}
        {selected === 'blog' && <BlogDetails />}
        {selected === 'course' && <CourseDetails />}

        <h2>6. Conditional Rendering with an IIFE (Immediately Invoked Function Expression)</h2>
        {(() => {
          if (selected === 'book') return <BookDetails />;
          if (selected === 'blog') return <BlogDetails />;
          return <CourseDetails />;
        })()}
      </div>
    );
  }
}

export default App;
