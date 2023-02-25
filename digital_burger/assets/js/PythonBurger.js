let python = document.querySelector("#python");
let pyHtml = (`
    <div class="content">
        <div class="pictures">
            <img src="./assets/images/burgers/bruno-burger.jpg" alt="">
            <div class="components">
                <ul>
                    <li><img src="https://www.linkpicture.com/q/egg_1.png"></img></li>
                    <li><img src="https://www.linkpicture.com/q/milk.png"></img></li>
                    <li><img src="https://www.linkpicture.com/q/pork.png"></img></li>
                </ul>
            </div>
        </div>
        <div class="pictures-text">
            <h2>Python Burger</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, ad cum. Libero illum inventore beatae modi quas, totam dolorum mollitia, optio perspiciatis obcaecati recusandae, repellendus consectetur dignissimos numquam. Commodi, quisquam.</p>
        </div>
    </div>`)

python.innerHTML = pyHtml;