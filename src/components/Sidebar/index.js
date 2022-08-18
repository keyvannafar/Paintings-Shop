
import { routes } from "../../routes";
import { Link } from "react-router-dom";
function Sidebar(){
    return (
      <>
        <div class="sidebar-header">
          <h3>MyShop </h3>
        </div>
        <Link className="nav-link" aria-current="page" to={routes.root}>
          Home
        </Link>
        <Link className="nav-link" aria-current="page" to={routes.paintings}>
          Paintings
        </Link>
        <ul class="list-unstyled components sidebar-sticky pt-0">
          <li class="active"></li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a
              href="#pageSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              class="dropdown-toggle"
            >
              Pages
            </a>
            <ul class="collapse list-unstyled" id="pageSubmenu">
              <li>
                <a href="#">Page 1</a>
              </li>
              <li>
                <a href="#">Page 2</a>
              </li>
              <li>
                <a href="#">Page 3</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>

        <ul class="list-unstyled CTAs">
          <li>
            <a
              href="https://bootstrapious.com/tutorial/files/sidebar.zip"
              class="download"
            >
              Download source
            </a>
          </li>
          <li>
            <a
              href="https://bootstrapious.com/p/bootstrap-sidebar"
              class="article"
            >
              Back to article
            </a>
          </li>
        </ul>
      </>
    );
}

export default Sidebar