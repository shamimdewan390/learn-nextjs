"use client"
import Link from 'next/link'
import React from 'react'

function NewArticle({
  params,
  searchParams
}: {
  params: { articleId: string };
  searchParams: {lang?: "en" | "bn"};
}) {
  const articleId = params.articleId;
  const {lang= "en"} = searchParams;
  return (
    <div>
      <h1>New Article {articleId}</h1>

      <p>reading in {lang}</p>

      <div>
        <Link href={`/articles/${articleId}?lang=en`}>Read in En</Link>
        <Link href={`/articles/${articleId}?lang=bn`}>Read in Bangla</Link>

      </div>
    </div>
  )
}

export default NewArticle
