---
layout: page
type: project
heading: "Case Study"
title:  "Sundance.org Design System and Refactor Case Study"
summary: "A new design system, a Sketch overhaul, and some CSS refactoring."
image: styleguidepreview.png
date:   2018-07-30
categories: design
code: 'styleguide'
cta: 'Read Case Study'
---

<div class="o-wrapper o-spacer__bottom--huge">
  <div class="o-layout o-layout--center o-spacer__top--huge">
    <div class="o-layout__item u-2/3@desktop">
      <h3>Case Study: Sundance.org Design System and CSS Refactor</h3>
      <p>This project involved a complete overhaul of Sketch documents, a CSS refactor, and the creation of a formal design system for Sundance.org.</p>
    </div>
    <div class="o-layout__item u-2/3@desktop o-spacer__bottom">
      <p><em>Role: UI Design, Front-End Development, Strategy, Implementation</em></p>
      <p><a rel="nofollow" href="https://sundance-org.github.io/styles/cards/" target="_blank">View Project</a></p>
      <p>Jump to section:<br><a href="#design">I. Sketch Overhaul</a> | <a href="#code">II. CSS Methodology</a> | <a href="#jekyll">III. Abstract Refactoring</a></p>
    </div>
    <div class="o-layout__item o-spacer__bottom">
      <img style="margin-bottom: 24px;" src="{{ "assets/img/styleguide--hero.png" | relative_url }}" alt="">
    </div>

    <div class="o-layout__item u-2/3@desktop o-spacer__bottom">

      <h4 id="design">I. Sketch Overhaul (Design Debt)</h4>

      <p><a href="https://blog.sketchapp.com/an-iconic-new-look-and-more-4191df5ce8d7" target="_blank">Sketch 41</a> introduced nested symbol overrides, making it one of the single greatest Sketch updates to date. Designers could now create an entire microcosm of symbols by nesting symbols inside of symbols inside of more symbols. After Sketch 41 was released I soon realized that I was going to have to revamp all my Sketch files. Thankfully there are brilliant people in this world who are always paving the way.</p>

      <p><a target="_blank" href="https://medium.com/ux-power-tools/this-is-without-a-doubt-the-coolest-sketch-technique-youll-see-all-day-ddefa65ea959#.pevfkykqk">Jon Moore</a> and <a target="_blank" href="https://medium.com/@lloyd/sketch-symbols-best-practices-now-that-nested-overrides-are-a-thing-9b651d3fe1a4#.3jsbforui">Lloyd Humphries</a>, do a fantastic job of highlighting how best to approach utilizing deeply nested symbols in building components within Sketch.</p>

      <p>Jon Moore's <a target="_blank" href="https://www.uxpower.tools/">UX Power Tools</a> became my starting point, which comes preloaded with an entire ecosystem of symbols and components. I spent several days tinkering and learning, learning and tinkering until finally, I had put together a library of components that was fit for Sundance.org.</p>

      <p><strong>Here is a sample of my symbols page. It looks and is pretty hairy, but the madness is worth it when you get every symbol working properly.</strong></p>

    </div>

    <div class="o-layout__item u-1/1@desktop u-1/1@tablet o-spacer__bottom--large">
      <div class="c-images c-images--padded u-1/3">
        <img data-action="zoom" src="{{ "assets/img/styleguide-symbols.png" | relative_url }}">
      </div>
      <div class="c-images c-images--padded u-1/3">
        <img data-action="zoom" src="{{ "assets/img/styleguide-buttonsymbols.png" | relative_url }}">
      </div>
      <div class="c-images c-images--padded u-1/3">
        <img data-action="zoom" src="{{ "assets/img/styleguide-textsymbols.png" | relative_url }}">
      </div>
    </div>

    <div class="o-layout__item u-2/3@desktop o-spacer__bottom">

      <p>Nearly every design component used on any given screen was constructed using symbols with content overrides. This meant that near-perfect consistency would be maintained across the entire document.</p>

      <p>Going through this process also forced me to address a lot of other issues that were present in my initial designs. For example, Sundance.org lacked a true baseline grid, which gave the site a perceptibly poor vertical rhythm. I took advantage of this opportunity to spent almost an entire day recalculating every space and line-height throughout the entire site. It's astonishing how subtle that change was and how much of an impact it had on every single page. With these tweaks out of the way, our team would now need to strategize on how to go about implementing a complete refactoring of the site's CSS.</p>

      <h4 id="code">II. Refactoring with ITCSS/BEM</h4>

      <p>Without proper rules and strategy, CSS is a language that lends itself to misuse. Often times developers will write styles specific to one component without thinking critically about how that code could be reused across other elements. This is what happened in 2014 when our team rebuilt and relaunched Sundance.org. I had been the sole author of all the CSS during the 2014 relaunch project and had made a lot of poor decisions. </p>

      <p>After lots of research and deliberation about how we wanted to approach architecting our CSS, we decided to use a methodology called ITCSS. ITCSS is based on the idea of organizing CSS in an inverted triangle starting from most broad and far-reaching styles at the top of the hierarchy and building downward to increasingly specific elements.</p>

      <p>Here’s a quick breakdown:</p>

      <ul class="o-list-bare">
        <li>1. Settings (preprocessor variables, font sizes, colors, configs)</li>
        <li>2. Tools (preprocessor mixins and functions)</li>
        <li>3. Generic (normalize, reset, box-sizing)</li>
        <li>4. Elements (HTML DOM elements, no classes)</li>
        <li>5. Objects (non-cosmetic design patterns like wrappers, alignment, cropping)</li>
        <li>6. Components (cosmetic/branded design patterns)</li>
        <li>7. Overrides (otherwise known as the shame folder)</li>
      </ul>

      <p>Harry Roberts, the creator, provides a fantastic, <a target="_blank" href="http://www.creativebloq.com/web-design/manage-large-scale-web-projects-new-css-architecture-itcss-41514731">in-depth explanation</a> of how ITCSS works.</p>

      <p>We had initially wanted to avoid the use of frameworks since they often bring with them tons of unwanted styles that you have to untangle. Thankfully Harry Roberts created <a rel="nofollow" href="https://github.com/inuitcss" target="_blank">InuitCSS</a>. InuitCSS is a framework comprised of both ITCSS methodology and BEM naming conventions. A framework in its purest sense, InuitCSS comes only with the basic architecture of a CSS library. It contains nothing in the way of aesthetic. Furthermore, InuitCSS brings so much utility out of the box that you can assemble entire patterns without having to write very many custom class styles.</p>

      <p>With our Sketch components completely laid out and a new CSS methodology, the only thing left was the hardest part... execution.</p>

      <h4 id="jekyll">III. Abstract Refactoring</h4>

      <p>Making sweeping changes to a website's codebase is full of risks. Coordinating work between teams and team members becomes very tricky when you have to deal with the fact that projects are constantly in motion. We wanted to do everything we could to avoid this nightmare so I opted to build each of the patterns in abstraction, outside the codebase and out of pace with the other projects that were progressing. Using Jekyll with InuitCSS installed, I built every component to spec before moving the new CSS into the actual codebase. The migration process only took several weeks, which minimized the amount of time that we spent living between two vastly different CSS libraries. </p>

      <p>One unintended consequence of executing the refactor in abstraction on a Jekyll instance was that we could now publish it to Github pages as a <a target="_blank" rel="nofollow" href="https://sundance-org.github.io/styles/cards/">living style guide</a>. This has become an invaluable resource for our dev team and for external vendors to reference. </p>

      <h4>The Results</h4>
      <p>
        Pre-refactor CSS:1025kb at 27,477 lines<br>
        Post-refactor CSS: 300kb at 8,000 lines<br>
        <strong>Estimated Final CSS File: ~175kb (after minification)</strong>
      </p>

      <p>
        Pre-refactor largest selector length: 11<br>
        <strong>Post-refactor largest selector length: 7</strong>
      </p>

      <p>
        Pre-refactor total selectors used: 4674<br>
        <strong>Post-refactor total selectors used: 939</strong>
      </p>

    </div>

  </div>
</div>
