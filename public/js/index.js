const d = document;

const addWord = (word) => {
    const badges = d.querySelector("#badges");
    const span = document.createElement('span');
    span.classList = "badge rounded-pill text-bg-info m-2";
    span.innerText = word;
    badges.appendChild(span);
    d.querySelector('#input').value = "";
};

const main = () => {
    const input = d.querySelector('#input')
    const btn = d.querySelector("#btn")
    
    btn.addEventListener('click', () => {
        addWord(input.value);
    });

    input.addEventListener('keyup', (e) => {
        e.preventDefault();
        if (e.key === 'Enter' || e.keyCode === 13) {
            addWord(input.value);
        }
    })
}

d.addEventListener('DOMContentLoaded', main, false);