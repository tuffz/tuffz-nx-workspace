import { UiFooter, Website } from '@tuffz/shared/ui/footer';
import { Component } from 'react';
import { UnderConstruction } from '@tuffz/coding-booth/under-construction';

export class App extends Component {
  render() {
    return (
      <div id="app" className="min-h-screen bg-white">
        <main className="container mx-auto p-2">
          <UnderConstruction />
        </main>
        <UiFooter website={Website.CODINGBOOTHCOM} />
      </div>
    );
  }
}

export default App;
