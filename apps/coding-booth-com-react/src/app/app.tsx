import { Component } from 'react';

import { CharacterCounter } from '@tuffz/coding-booth-com-feature-character-counter';
import { SharedUiFooter, Website } from '@tuffz/shared-ui-footer';

export class App extends Component {
  render() {
    return (
      <div id="app" className="min-h-screen bg-white dark:bg-gray-900">
        <main className="container mx-auto p-2">
          <CharacterCounter />
        </main>
        <SharedUiFooter website={Website.CODINGBOOTHCOM} />
      </div>
    );
  }
}

export default App;
