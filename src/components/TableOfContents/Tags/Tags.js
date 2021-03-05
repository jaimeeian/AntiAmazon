import React from 'react'
import { Link } from 'gatsby'

/**
 * A list of tags displayed under an article title.
 * @param {Object} props
 * @param {Array} props.tags a list of tags
 * @param {string} props.title the article title to which the tags belong
 */
const Tags = ({ tags, title }) => (
    <>
        {
            tags.map((tag, i) => {
                return(
                    <span
                        className="text-gray-600 text-sm"
                        key={title + tag + Math.random().toString()}
                    >
                        <Link
                            className="inline-block hover:text-blue-500"
                            to={`/toc#${tag}`}
                        >
                            { tag }
                        </Link>
                        { i < tags.length - 1 ? ', ' : '' }
                    </span>
                )
            })
        }
    </>
)

export default Tags