webpackJsonp([80867851804039],{644:function(n,s){n.exports={data:{markdownRemark:{html:'<h2 id="build-your-first-viber-bot"><a href="#build-your-first-viber-bot" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Build Your First Viber Bot</h2>\n<p>After setting up and getting the authorization token, you should fill it in <a href="https://github.com/Yoctol/bottender/tree/master/examples/viber-hello-world/index.js">viber-hello-world</a>. The following is part of sample code.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token string">\'__FILL_URL_HERE__\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> bot <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ViberBot</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  accessToken<span class="token punctuation">:</span> <span class="token string">\'__FILL_YOUR_TOKEN_HERE__\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Run your server and talk to the Viber bot. It works!</p>\n<h3 id="full-example"><a href="#full-example" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Full Example</h3>\n<p>Here is the complete example for <a href="https://github.com/Yoctol/bottender/tree/master/examples/viber-hello-world/index.js">viber-hello-world</a>.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> <span class="token punctuation">{</span> ViberBot <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'bottender\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token punctuation">{</span> createServer <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'bottender/express\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> bot <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ViberBot</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  accessToken<span class="token punctuation">:</span> <span class="token string">\'__FILL_YOUR_TOKEN_HERE__\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nbot<span class="token punctuation">.</span><span class="token function">onEvent</span><span class="token punctuation">(</span><span class="token keyword">async</span> context <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">await</span> context<span class="token punctuation">.</span><span class="token function">sendText</span><span class="token punctuation">(</span><span class="token string">\'Hello World\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> server <span class="token operator">=</span> <span class="token function">createServer</span><span class="token punctuation">(</span>bot<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nserver<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">5000</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'server is running on 5000 port...\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h2 id="events"><a href="#events" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Events</h2>\n<p>Bottender supplies several types of event. You are able to access them via <code class="language-text">context.event</code>.<br>\nFor more information, check <a href="./APIReference-Event">Event Reference</a>.</p>\n<h3 id="viber-specific-context-event"><a href="#viber-specific-context-event" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Viber-Specific Context Event</h3>\n<ul>\n<li>isMessage</li>\n<li>isText</li>\n<li>isPicture</li>\n<li>isVideo</li>\n<li>isFile</li>\n<li>isSticker</li>\n<li>isContact</li>\n<li>isLocation</li>\n<li>isSubscribed</li>\n<li>isUnsubscribed</li>\n<li>isConversationStarted</li>\n<li>isDelivered</li>\n<li>isSeen</li>\n<li>isFailed</li>\n<li>text</li>\n<li>picture</li>\n<li>...</li>\n</ul>\n<p>more on <a href="./APIReference-ViberEvent">ViberEvent Reference</a>.</p>\n<p>Example:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">bot<span class="token punctuation">.</span><span class="token function">onEvent</span><span class="token punctuation">(</span><span class="token keyword">async</span> context <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>context<span class="token punctuation">.</span>event<span class="token punctuation">.</span>isText<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">await</span> context<span class="token punctuation">.</span><span class="token function">sendText</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`I know this is a text: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>event<span class="token punctuation">.</span>text<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>context<span class="token punctuation">.</span>event<span class="token punctuation">.</span>isPicture<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">await</span> context<span class="token punctuation">.</span><span class="token function">sendText</span><span class="token punctuation">(</span><span class="token string">\'I know this is a picture.\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    <span class="token keyword">await</span> context<span class="token punctuation">.</span><span class="token function">sendText</span><span class="token punctuation">(</span><span class="token string">\'I do not understand.\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h2 id="send-apis"><a href="#send-apis" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Send APIs</h2>\n<p>After your bot receives the request from Viber, you can use context send APIs to interact with users.</p>\n<h3 id="viber-specific-context-send-api"><a href="#viber-specific-context-send-api" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Viber-Specific Context Send API</h3>\n<ul>\n<li>sendMessage</li>\n<li>sendText</li>\n<li>sendPicture</li>\n<li>sendVideo</li>\n<li>sendFile</li>\n<li>sendContact</li>\n<li>sendLocation</li>\n<li>sendURL</li>\n<li>sendSticker</li>\n<li>sendCarouselContent</li>\n</ul>\n<p>more on <a href="./APIReference-ViberContext">ViberContext Reference</a>.</p>\n<p>Example:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">bot<span class="token punctuation">.</span><span class="token function">onEvent</span><span class="token punctuation">(</span><span class="token keyword">async</span> context <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">await</span> context<span class="token punctuation">.</span><span class="token function">sendText</span><span class="token punctuation">(</span><span class="token string">\'Hello World!\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">await</span> context<span class="token punctuation">.</span><span class="token function">sendPicture</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    text<span class="token punctuation">:</span> <span class="token string">\'Photo description\'</span><span class="token punctuation">,</span>\n    media<span class="token punctuation">:</span> <span class="token string">\'http://www.images.com/img.jpg\'</span><span class="token punctuation">,</span>\n    thumbnail<span class="token punctuation">:</span> <span class="token string">\'http://www.images.com/thumb.jpg\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">await</span> context<span class="token punctuation">.</span><span class="token function">sendContact</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    name<span class="token punctuation">:</span> <span class="token string">\'Itamar\'</span><span class="token punctuation">,</span>\n    phone_number<span class="token punctuation">:</span> <span class="token string">\'+972511123123\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">await</span> context<span class="token punctuation">.</span><span class="token function">sendURL</span><span class="token punctuation">(</span><span class="token string">\'http://developers.viber.com\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">await</span> context<span class="token punctuation">.</span><span class="token function">sendSticker</span><span class="token punctuation">(</span><span class="token number">46105</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h2 id="references"><a href="#references" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>References</h2>\n<ul>\n<li><a href="https://github.com/Yoctol/messaging-apis/tree/master/packages/messaging-api-viber">Messaging-apis-viber</a></li>\n<li><a href="https://www.viber.com/">Official Viber Page</a></li>\n<li><a href="https://developers.viber.com/docs/api/rest-bot-api/">Official Viber Bot API</a></li>\n</ul>',frontmatter:{title:"Viber",date:"December 14, 2017",author:null},fields:{path:"docs/Platforms-Viber.md"}},site:{siteMetadata:{title:"Bottender"}}},pathContext:{slug:"/docs/Platforms-Viber/"}}}});
//# sourceMappingURL=path---docs-platforms-viber-9bf954d993af46281362.js.map