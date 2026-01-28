function Header() {
    //  useEffect(() => {
    //     initTWE({ Dropdown });
    //   }, []);
  return (
    <>
      <nav
        className="relative flex w-full items-center justify-between bg-primary py-2 lg:flex-wrap lg:justify-start lg:py-4"
        data-twe-navbar-ref
      >
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          <div className="flex items-center">
            <button
              className="block border-0 bg-transparent px-2 text-black/50 lg:hidden"
              type="button"
              data-twe-collapse-init
              data-twe-target="#navbarSupportedContentY"
              aria-controls="navbarSupportedContentY"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:stroke-black/50 dark:[&>svg]:stroke-neutral-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </span>
            </button>
          </div>

          <div
            className="!visible hidden grow basis-[100%] items-center text-center lg:!flex lg:basis-auto lg:text-left"
            id="navbarSupportedContentY"
            data-twe-collapse-item
          >
            <ul
              className="me-auto flex flex-col lg:flex-row"
              data-twe-navbar-nav-ref
            >
              <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
                <a
                  className="block text-black  lg:px-2"
                  href="#!"
                  data-twe-nav-link-ref
                  
                  data-twe-ripple-color="light"
                >
                  Home
                </a>
              </li>
              <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
                <a
                  className="block text-black  lg:px-2"
                  href="#!"
                  data-twe-nav-link-ref
                  
                  data-twe-ripple-color="light"
                >
                  Features
                </a>
              </li>
              <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
                <a
                  className="block text-black  lg:px-2"
                  href="#!"
                  data-twe-nav-link-ref
                  
                  data-twe-ripple-color="light"
                >
                  Pricing
                </a>
              </li>
              <li className="mb-2 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
                <a
                  className="block text-black  lg:px-2"
                  href="#!"
                  data-twe-nav-link-ref
                  
                  data-twe-ripple-color="light"
                >
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
