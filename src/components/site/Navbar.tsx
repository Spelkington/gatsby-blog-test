import * as React from "react";
import { useStaticQuery, graphql, Link } from "gatsby"

export const Navbar = () => {

    const data: Queries.NavLinkQuery = useStaticQuery(graphql`
        query NavLink {
            site {
                siteMetadata {
                    title,
                    menuLinks {
                        label,
                        link
                    }
                }
            }
        }
    `);

    const navLinks = data?.site?.siteMetadata;

    return (
        <>
            <h1>Hello, World!</h1>
            <h1>{navLinks?.title}</h1>
            <ul>
                {navLinks?.menuLinks?.map((link) => (
                    <li key={link?.label}>
                        <Link to={link?.link!}>
                            {link?.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}
