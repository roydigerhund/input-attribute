import { FunctionalComponent, h } from 'preact';
import { useState } from 'preact/hooks';


const App: FunctionalComponent = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    return (
        <div>
            <input
                type="email"
                class="test-class"
                name="email"
                value={email}
                onInput={(e) => setEmail(e.currentTarget.value)}
                placeholder="Email"
            />
            <input
                type="text"
                class="test-class"
                name="username"
                value={username}
                onInput={(e) => setUsername(e.currentTarget.value)}
                placeholder="Username"
            />
        </div>
    );
};

export default App;
