import { Component } from 'react';
import { UiImageEmbed } from '@tuffz/shared/ui/image-embed';
import { UiFooter, Website } from '@tuffz/shared/ui/footer';

export class App extends Component {
  render() {
    return (
      <div id="app" className="min-h-screen bg-white">
        <main className="container mx-auto p-2">
          <div className="flex flex-col min-h-screen justify-center items-center">
            <h1>
              <UiImageEmbed
                src="assets/welcome.png"
                alt="Welcome at Coding Booth"
              />
            </h1>
            <p className="text-xl">
              Exciting updates are on the way! Stay tuned as we build something
              amazing for you.
            </p>
          </div>
        </main>
        <UiFooter website={Website.CODINGBOOTHCOM} />
      </div>
    );
  }
}

export default App;
