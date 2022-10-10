import{_ as a,r as t,o as n,c as o,a as i,b as e,d as r,w as c,e as p}from"./app.86f309b6.js";const l={},d=p(`<h1 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h1><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>The API is still a work in progress and some features are missing. The existing endpoints will stay compatible within the same major version though.</p></div><p>Each instance of room-assistant exposes an HTTP API that you can use for debugging or connecting it to different services. The API is accessible under port <code>6415</code> by default.</p><p>The API is documented with an OpenAPI schema that you can retrieve under <code>/api-json</code>. For a visual representation navigate to <code>/api</code>. You can make all available API calls directly in your browser from this page.</p><h2 id="websocket-api" tabindex="-1"><a class="header-anchor" href="#websocket-api" aria-hidden="true">#</a> WebSocket API</h2><p>room-assistant also offers a websocket interface, which you can use to subscribe to entity updates. It is hosted on the same port as the HTTP API. To subscribe to updates you can send the following request to the socket:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;subscribeEvents&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;entityUpdates&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function u(h,m){const s=t("RouterLink");return n(),o("div",null,[d,i("p",null,[e("This will give you a stream of all entity updates in the same format as the "),r(s,{to:"/integrations/mqtt.html#message-format"},{default:c(()=>[e("MQTT integration")]),_:1}),e(" provides.")])])}const b=a(l,[["render",u],["__file","api.html.vue"]]);export{b as default};
