import React from 'react';
import TransitionLink from 'gatsby-plugin-transition-link';

export const Menu = () => {
  return (
    <>
      <div className="flex mb-20 justify-between">
        <div className="mr-8 text-xl">
          <TransitionLink
            to="/"
            exit={{
              length: 1,
            }}
            entry={{ length: 1 }}
            className="hover:text-gray-600"
          >
            HOMEPAGE
          </TransitionLink>
        </div>
        <div className="flex">
          <div className="mr-8 text-md uppercase">
            <TransitionLink
              to="/about"
              exit={{
                length: 1,
              }}
              entry={{}}
              className="hover:text-gray-600"
              activeClassName="border-b-2 border-gray-600"
            >
              About
            </TransitionLink>
          </div>
          <div className="mr-8 text-md uppercase">
            <TransitionLink
              to="/contact"
              exit={{
                length: 1,
              }}
              entry={{}}
              className="hover:text-gray-600"
              activeClassName="border-b-2 border-gray-600"
            >
              Contact
            </TransitionLink>
          </div>
        </div>
      </div>
    </>
  );
};
