import React from 'react'
import classNames from 'classnames'
import Layout from './Layout'
import TableOfContents from '../TableOfContents/TableOfContents'

/**
 * @return Page Layout component with a Table of Contents sidebar
 */
export default function LayoutWithTOC({ children, className }) {
    return (
        <Layout>
            <div className={"grid md:grid-cols-3 gap-12"}>
                <div className={classNames("md:col-span-2 md:col-start-2", className)}>
                    { children }
                </div>
                <div className="md:col-start-1 md:row-start-1 md:overflow-auto">
                    <TableOfContents />
                </div>
            </div>
        </Layout>
    )
}