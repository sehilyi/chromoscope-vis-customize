import { GoslingComponent, Theme } from 'gosling.js';
import patient1 from './data/patient1.json';
import { fn } from '../src/index';

const F = 15;
const t: Theme = {
    base: 'light',
    axis: { labelFontSize: F },
    track: { titleFontSize: F },
    legend: { labelFontSize: F }
};

function App() {
    const edit = (spec: GoslingSpec) => { };

    return (
        <div>
            // {fn()}
            <GoslingComponent spec={patient1} theme={t} />
        </div>
    );
}

export default App;
