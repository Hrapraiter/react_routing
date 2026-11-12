function About() {
    return (        
        <>
            <h1>Routing</h1>
            <p>
                <strong>Маршрутизация</strong> &#8213;
                это переключение между страницамии в одностраничном предложении.
                Сам по себе React маршрутизацию не поддерживает,
                её нужно доустанавливать в проект при помощи команды :
            </p>
            <pre>
                npm install --save-dev react-router-dom
            </pre>
            <p>
                Кроме того, компонентa App в файле index.js нужно обернуть в компонент
                BrowserRouter, который импортируется из файла 'react-router-dom'.
            </p>
        </>
    );
}
export default About;