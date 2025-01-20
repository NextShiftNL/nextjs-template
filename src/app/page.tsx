import FlipLink from "@/themes/components/FlipLink";
import { TransitionLink } from "@/themes/components/PageTransition/PageTransitionWrapper-1";
import { FadeScaleLink } from "@/themes/components/PageTransition/PageTransitionWrapper-2";
import { SlideLink } from "@/themes/components/PageTransition/PageTransitionWrapper-3";
import { RotateScaleLink } from "@/themes/components/PageTransition/PageTransitionWrapper-4";
import { SlideUpLink } from "@/themes/components/PageTransition/PageTransitionWrapper-5";
import ScrollAnimation from "@/themes/components/gsap/ScrollAnimation";

export default function Home() {
  return (
    <div className="min-h-screen responsive-padding">
      <div className="container mx-auto space-y-8 sm:space-y-16">
        {/* Headings */}
        <section className="space-y-6 sm:space-y-8">
          <h2>Typography</h2>
          <div className="space-y-8">
            <div className="space-y-4">
              <h1>Heading 1 - Large and in charge</h1>
              <h2>Heading 2 - Section headers</h2>
              <h3>Heading 3 - Sub-sections</h3>
              <h4>Heading 4 - Card titles</h4>
            </div>

            <div className="space-y-4">
              <p>
                Regular paragraph with <strong>bold text</strong> and{" "}
                <em>italic text</em> for emphasis. Also includes a{" "}
                <a href="#">link example</a> to show hypertext styling.
              </p>

              <blockquote>
                This is a blockquote. It&apos;s useful for highlighting
                important quotes or messages within your content.
              </blockquote>

              <code>This is how inline code looks</code>

              <pre>
                {`function example() {
    return "This is a code block";
}`}
              </pre>
            </div>
          </div>
        </section>

        {/* Colors */}
        <section className="space-y-4 sm:space-y-6">
          <h2>Color System</h2>
          <div className="responsive-grid">
            <div className="space-y-2">
              <div className="h-20 bg-primary rounded-lg"></div>
              <p className="font-medium">Primary</p>
              <p className="text-sm text-muted-foreground">Main action color</p>
            </div>
            <div className="space-y-2">
              <div className="h-20 bg-secondary rounded-lg"></div>
              <p className="font-medium">Secondary</p>
              <p className="text-sm text-muted-foreground">Supporting color</p>
            </div>
            <div className="space-y-2">
              <div className="h-20 bg-muted rounded-lg"></div>
              <p className="font-medium">Muted</p>
              <p className="text-sm text-muted-foreground">
                Subtle backgrounds
              </p>
            </div>
            <div className="space-y-2">
              <div className="h-20 bg-destructive rounded-lg"></div>
              <p className="font-medium">Destructive</p>
              <p className="text-sm text-muted-foreground">Error states</p>
            </div>
          </div>
        </section>

        {/* Components */}
        <section className="space-y-8 sm:space-y-12">
          <h2>Components</h2>
          
          <div className="space-y-8 sm:space-y-12">
            {/* Page Transition */}
            <div className="space-y-4">
              <h3>Page Transition</h3>
              <div className="flex flex-wrap gap-4">
                <TransitionLink href="/backgrounds" >
                  Blur Transition
                </TransitionLink>
                <FadeScaleLink href="/backgrounds">
                  Fade Scale Transition
                </FadeScaleLink>
                <SlideLink href="/backgrounds">
                  Slide Transition
                </SlideLink>
                <RotateScaleLink href="/backgrounds">
                  Rotate Scale Transition
                </RotateScaleLink>
                <SlideUpLink href="/backgrounds">
                  Slide Up Transition
                </SlideUpLink>
              </div>
            </div>

            {/* Backgrounds */}
            <div className="space-y-4">
              <h3>Backgrounds</h3>
              <div>
                <TransitionLink href="/backgrounds">
                  Backgrounds
                </TransitionLink>
              </div>
            </div>

            {/* Hover examples */}
            <div className="space-y-4">
              <h3>Hover</h3>
              <div className="flex gap-8 flex-wrap">
                <FlipLink href="/">Flip</FlipLink>
                <div className="group relative cursor-pointer">
                  <span>Left to Right</span>
                  <span className="hover-underline-left"></span>
                </div>
                <div className="group relative cursor-pointer">
                  <span>Right to Left</span>
                  <span className="hover-underline-right"></span>
                </div>
                <div className="group relative cursor-pointer">
                  <span>Middle Out</span>
                  <span className="hover-underline-middle"></span>
                </div>
                <span className="hover-zoom">Zoom in</span>

                {/* New hover animations */}
                <div className="transform transition-all hover:rotate-12 cursor-pointer">
                  Rotate Hover
                </div>
                <div className="transform transition-all hover:-translate-y-2 cursor-pointer">
                  Float Up
                </div>
                <div className="transform transition-all hover:scale-95 cursor-pointer">
                  Shrink
                </div>
                <div className="animate-none hover:animate-bounce cursor-pointer">
                  Bounce
                </div>
                <div className="animate-none hover:animate-pulse cursor-pointer">
                  Pulse
                </div>
                <div className="animate-none hover:animate-ping cursor-pointer">
                  Ping
                </div>
                <div className="transition-all hover:blur-sm cursor-pointer">
                  Blur
                </div>
                <div className="group cursor-pointer">
                  <span className="transition-all group-hover:text-primary group-hover:font-bold">
                    Color & Weight
                  </span>
                </div>
              </div>
            </div>

            {/* Rest of the components */}
            <div className="space-y-4">
              <h3>Buttons</h3>
              <div className="flex flex-wrap responsive-gap">
                <button className="btn-primary">Primary Action</button>
                <button className="btn-secondary">Secondary Action</button>
                <button className="btn-primary" disabled>
                  Disabled
                </button>
                <button className="btn-magic">
                  <span>Border Magic</span>
                </button>
                <button className="btn-slide">
                  <span className="text-black">Slide hover</span>
                </button>
                <button className="btn-shadow">Shadow Hover</button>
                <button className="btn-fill">Fill Hover</button>
              </div>
            </div>

            <div className="space-y-4">
              <h3>Form Elements</h3>
              <div className="max-w-sm space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Default Input
                  </label>
                  <input
                    type="text"
                    className="input w-full"
                    placeholder="Type something..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Error State
                  </label>
                  <input
                    type="text"
                    className="input input-error w-full"
                    placeholder="Invalid input"
                  />
                  <p className="text-sm text-destructive mt-1">
                    This field is required
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3>Cards</h3>
              <div className="responsive-grid">
                <div className="card">
                  <h4>Card Example</h4>
                  <p>
                    Cards can contain various types of content and are useful
                    for grouping related information.
                  </p>
                </div>
                
                {/* Text Loading Card */}
                <div className="card space-y-4">
                  <h4>Text Loading</h4>
                  <div className="space-y-2">
                    <div className="skeleton h-4 w-3/4"></div>
                    <div className="skeleton h-4 w-1/2"></div>
                    <div className="skeleton h-4 w-5/6"></div>
                  </div>
                </div>

                {/* Profile Loading Card */}
                <div className="card space-y-4">
                  <h4>Profile Loading</h4>
                  <div className="flex items-center space-x-4">
                    <div className="skeleton h-12 w-12 rounded-full"></div>
                    <div className="space-y-2">
                      <div className="skeleton h-4 w-[120px]"></div>
                      <div className="skeleton h-3 w-[80px]"></div>
                    </div>
                  </div>
                </div>

                {/* Image Card Loading */}
                <div className="card space-y-4">
                  <h4>Image Card Loading</h4>
                  <div className="skeleton h-48 w-full rounded-lg"></div>
                  <div className="space-y-2">
                    <div className="skeleton h-4 w-2/3"></div>
                    <div className="skeleton h-4 w-1/2"></div>
                  </div>
                </div>

                {/* Table Loading */}
                <div className="card">
                  <h4>Table Loading</h4>
                  <div className="space-y-3 mt-4">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="flex space-x-4">
                        <div className="skeleton h-4 w-1/4"></div>
                        <div className="skeleton h-4 w-1/3"></div>
                        <div className="skeleton h-4 w-1/4"></div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats Loading */}
                <div className="card">
                  <h4>Stats Loading</h4>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="space-y-2">
                      <div className="skeleton h-8 w-16"></div>
                      <div className="skeleton h-4 w-20"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="skeleton h-8 w-16"></div>
                      <div className="skeleton h-4 w-20"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Add new GSAP Animation section at the bottom */}
        <section className="space-y-8 sm:space-y-12">
          <h2>GSAP Animations</h2>
          <div className="space-y-16">
            <ScrollAnimation animation="fadeIn">
              <div className="card p-6">
                <h3>Fade In Animation</h3>
                <p>This element fades in when scrolled into view</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slideUp">
              <div className="card p-6">
                <h3>Slide Up Animation</h3>
                <p>This element slides up when scrolled into view</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="scaleIn">
              <div className="card p-6">
                <h3>Scale In Animation</h3>
                <p>This element scales in when scrolled into view</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="rotateIn">
              <div className="card p-6">
                <h3>Rotate In Animation</h3>
                <p>This element rotates in when scrolled into view</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="stagger">
              <div className="card p-6">
                <h3>Stagger Animation</h3>
                <div className="space-y-4">
                  <p>These elements stagger in when scrolled into view</p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-primary p-4 rounded">Item 1</div>
                    <div className="bg-primary p-4 rounded">Item 2</div>
                    <div className="bg-primary p-4 rounded">Item 3</div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>
      </div>
    </div>
  );
}
