import { NavLink, useLocation } from "react-router-dom";
import { useMemo } from "react";

const Breadcrumb = () => {
  const location = useLocation();

  const pathnames = location.pathname.split("/").filter((x) => x);

  const breadcrumbItems = useMemo(() => {
    return pathnames.map((pathname, index) => {
      const to = `/${pathnames.slice(0, index + 1).join("/")}`;
      return { to, label: pathname };
    });
  }, [pathnames]);

  return (
    <nav className="container flex pb-3 pt-4 rounded-md">
      <ol className="list-reset flex ml-[-30px]">
        <NavLink
          to="/"
          className="text-[var(--black-600)] hover:font-bold transition-all-150"
        >
          Home
        </NavLink>
        {breadcrumbItems.map((item) => (
          <div className=" last:font-[600] flex" key={item.to}>
            <li className="mx-2">
              <svg
                className="w-3 h-3 inline text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 7l7 7-7 7"
                />
              </svg>
            </li>
            <li>
              <NavLink
                to="/"
                className="text-[var(--black-600)] hover:font-bold transition-all-150"
              >
                {item?.label}
              </NavLink>
            </li>
          </div>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
