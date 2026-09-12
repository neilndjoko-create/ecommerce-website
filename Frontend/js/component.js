$(document).ready(function() {

    $('#card1').hide();
    $('#card2').hide();
    $('#src').hide();


    $('#act1').click(function() {
        $('#card1').toggle();
    })
    $('#act2').click(function() {
        $('#card2').toggle();
    })
    $('#loop').click(function() {
        $('#src').toggle(200);
    })
});

function loadNavbar() {
    const navbarHTML = ` <header class="navbar bg-light">
        <nav class="navbar navbar-expand-lg navbar-dark  bg-light w-100 ">
            <div class="container-fluid d-flex">
                <a class="navbar-brand fw-bold text-success fs-3" id='logo'
                href="#">ShopEasy</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      
    </button>
                <ul class="nav justify-content-center" id="navlink">
                    <li class="nav-item">
                        <a class="nav-link active text-dark" aria-current="page" href="./home.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-dark" href="./shop.html">Shop</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-dark" href="./product.html">product</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-dark" href="./about.html">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-dark" href="./contact.html">contact</a>
                    </li>
                </ul>
            
            </div>
                    <div class="d-flex justify-content-end " id="end">
                   
                    <span class="item text-dark pt-1 btn mt-3" id="act2" title="profile"><i class="fa-solid fa-circle-user"></i></span>
                    <span class="item text-danger pt-1 btn mt-2" id="ht1" title="whishlist"><a  class="nav-link text-danger " href="./wishlist.html"><i class="fa-solid fa-heart"></i></span></a>
                    <span class="item text-dark pt-1 btn mt-2" id="loop" title="Cart"><a href="./cart.html" class="nav-link text-dark"><i class="fa-solid fa-bag-shopping"></i></span></a>
                    <button class="btn btn-outline-success 4 h-75 mt-3" id="act1">More</button></div>

            </div>
        </nav>
    </header>
    
    <div class="card m-5 bg-dark " style="width: 18rem ;" id="card1">
        <ul class="list-group  fw-bold text-center fs-6">
            <li class="list-group-item">
                <a class="nav-link text-dark " href="./checkout.html">checkout</a>
            </li>
            <li class="list-group-item">
                <a class="nav-link text-dark" href="./cart.html">cart</a>
            </li>

        </ul>
    </div>
    <div class="card m-5 bg-dark " style="width: 18rem ;" id="card2">
        <ul class="list-group  fw-bold text-center fs-6">
            <li class="list-group-item">
                <button class="btn btn-primary fw-bold"> <a class="nav-link text-light " href="./signup.html">Signup</a></button>
            </li>
            <li class="list-group-item">
                <button class="btn btn-outline-dark " id="ca"><a class="nav-link text-secondary fw-bold " href="./login.html">Join</a></button>
            </li>

        </ul>
    </div>`;
    document.getElementById('navbar').innerHTML = navbarHTML;
}

function loadFooter() {
    const footerHTML = ` <footer class="bd-footer bg-dark text-light pb-1">
        <div class="container py-5 align-item-center">
            <div class="row d-flex">
                <div class="col-lg-3 mb-3">
                    <a class="navbar-brand fw-bold text-success fs-2" href="#">ShopEasy</a>
                </div>
                <div class="col-6 col-lg-2 mb-3">
                    <h5 class="navbar-brand fw-bold text-light fs-5 " href="#">Links</h5>
                    <ul class="list-unstyled mb-3">
                        <li class="mb-2">
                            <a class="nav-link active text-light" aria-current="page" href="./home.html">Home</a>
                        </li>
                        <li class="mb-2">
                            <a class="nav-link text-light" href="./shop.html">Shop</a>
                        </li>
                        <li class="mb-2">
                            <a class="nav-link text-light" href="./product.html">product</a>
                        </li>
                        <li class="mb-2">
                            <a class="nav-link text-light" href="./about.html">About</a>
                        </li>
                        <li class="mb-2">
                            <a class="nav-link text-light" href="./contact.html">contact</a>
                        </li>
                    </ul>
                </div>
                <div class="col-6 col-lg-2 mb-3">
                    <a class="navbar-brand fw-bold text-light fs-5" href="#">Parthners</a>
                </div>
                <div class="col-6 col-lg-2 mb-3">
                    <a class="navbar-brand fw-bold text-light fs-5" href="#">content and sevices</a>
                </div>
            </div>
        </div>
    </footer>`;
    document.getElementById('footer').innerHTML = footerHTML


}