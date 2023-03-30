import CartWidget from "./CartWidget"

function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand m-x" href="/#">GKeys</a>
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active px-4">
          <a class="nav-link" href="/#">PC</a>
        </li>
        <li class="nav-item px-4">
          <a class="nav-link" href="/#">PS</a>
        </li>
        <li class="nav-item px-4">
          <a class="nav-link" href="/#">XBOX</a>
        </li>
        <li class="nav-item px-4">
          <a class="nav-link" href="/#">SWITCH</a>
        </li>
      </ul> 
      <CartWidget />  
    </div>    
  </nav>
  )
}
export default NavBar