import FlipLink from "@/themes/components/FlipLink";
import Link from "next/link";
import { TransitionLink } from "@/themes/components/PageTransition/PageTransitionWrapper-1";

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
                This is a blockquote. It's useful for highlighting important
                quotes or messages within your content.
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
              <div>
                <Link href="/page-transition">Page Transition</Link>
              </div>
            </div>
            {/* Backgrounds */}
            <div className="space-y-4">
              <h3>Backgrounds</h3>
              <div>
                <TransitionLink href="/backgrounds"> Backgrounds</TransitionLink>
              </div>
            </div>
            <div className="space-y-4">
              <h3>Cursor</h3>
              <div>
                <Link href="/cursors">Cursors</Link>
              </div>
            </div>

            {/* Hover examples comes wil be here */}
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

            {/* Buttons */}
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

            {/* Form Elements */}
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

            {/* Cards */}
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
                <div className="card">
                  <h4>Loading State</h4>
                  <div className="space-y-2">
                    <div className="skeleton h-4 w-3/4"></div>
                    <div className="skeleton h-4 w-1/2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
