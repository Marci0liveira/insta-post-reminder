import { Notifyer } from './Notifyer.js';
import { Timer } from './Timer.js';
import { Emitter } from './Emitter.js';

const notify = Notifyer.notify({ 
  title: 'Time to post', 
  body: 'Create engagement to build your community'});

const App = {
  async start() {
    try {

      await Notifyer.init();

      Emitter.on('countdown-start', notify);

      Emitter.on('countdown-end', Timer.init)
      
      Timer.init(0.1 * 600);
    } 
    catch (error) {
      console.log(error.message);
    }
  }
}

export { App };