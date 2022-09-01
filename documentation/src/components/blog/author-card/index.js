import React from "react";
import Link from "@docusaurus/Link";
import { useBlogPost } from "@docusaurus/theme-common/internal";

import { Github, Twitter, Linkedin } from "../icons";

export const AuthorCard = () => {
    const { metadata } = useBlogPost();

    const author = metadata.authors[0];
    const authorHasSocialInfo =
        author.github || author.twitter || author.linkedin;

    return (
        <div className="p-4 border border-solid border-[#dadde1] shadow-sm">
            <figcaption className="flex flex-col items-center">
                <Link href={author?.url} itemProp="url">
                    <img
                        src={author?.imageURL}
                        alt={author?.name}
                        className="flex w-24 h-24 rounded-full object-cover"
                        loading="lazy"
                    />
                </Link>
                <div className="text-center mt-2">
                    <Link
                        href={author?.url}
                        itemProp="url"
                        className="text-sm text-color-base font-semibold"
                    >
                        {author?.name}
                    </Link>
                    <div className="text-xs text-slate-600 -mt-0.5">
                        {author?.title}
                    </div>

                    {author?.description && (
                        <div className="text-sm text-slate-700 mt-4">
                            {author?.description}
                        </div>
                    )}

                    {authorHasSocialInfo && (
                        <div className="flex justify-center gap-3 mt-4">
                            {author?.github && (
                                <Link to={author?.github}>
                                    <Github className="w-8 h-8" />
                                </Link>
                            )}
                            {author?.twitter && (
                                <Link to={author?.twitter}>
                                    <Twitter className="w-8 h-8" />
                                </Link>
                            )}
                            {author?.linkedin && (
                                <Link to={author?.linkedin}>
                                    <Linkedin className="w-8 h-8" />
                                </Link>
                            )}
                        </div>
                    )}
                </div>
            </figcaption>
        </div>
    );
};