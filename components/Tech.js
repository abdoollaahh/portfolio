import { motion } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";

const Tech = () => {
  useEffect(() => {
    document.getElementById("cards").onmousemove = (e) => {
      for (const card of document.getElementsByClassName("card")) {
        const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      }
    };
  });

  return (
    <div>
      <div id="cards" className=" mx-1 flex flex-row flex-wrap justify-center">
        <div class="card mx-1 my-1 shadow-md">
          <div class="card-content">
            <div class="card-image">
              <Image src="/react.png" width={80} height={80} />
            </div>
            <div class="card-info-wrapper">
              <div class="card-info">
                <i class="fa-duotone fa-apartment"></i>
                <div class="card-info-title">
                  <h3 className="dark:text-white">React</h3>
                  <h4 className="dark:text-white/50">
                    Where components come alive
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card mx-1 my-1 shadow-md">
          <div class="card-content">
            <div class="card-image">
              <Image src="/next.png" width={100} height={100} />
            </div>
            <div class="card-info-wrapper">
              <div class="card-info">
                <i class="fa-duotone fa-unicorn"></i>
                <div class="card-info-title">
                  <h3 className="dark:text-white">NEXT.js</h3>
                  <h4 className="dark:text-white/50">
                    a little extra oomph your React app
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card mx-1 my-1 shadow-md">
          <div class="card-content">
            <div class="card-image">
              <Image src="/tailwind.png" width={80} height={80} />
            </div>
            <div class="card-info-wrapper">
              <div class="card-info">
                <i class="fa-duotone fa-blender-phone"></i>
                <div class="card-info-title">
                  <h3 className="dark:text-white">Tailwind CSS</h3>
                  <h4 className="dark:text-white/50">
                    sleek designs made simple
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card mx-1 my-1 shadow-md">
          <div class="card-content">
            <div class="card-image">
              <Image
                src="/JS.png"
                width={80}
                height={80}
                className="rounded-lg"
              />
            </div>
            <div class="card-info-wrapper">
              <div class="card-info">
                <i class="fa-duotone fa-person-to-portal"></i>
                <div class="card-info-title">
                  <h3 className="dark:text-white">JavaScript</h3>
                  <h4 className="dark:text-white/50">
                    turning coffee into code since 1995
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card mx-1 my-1 shadow-md">
          <div class="card-content">
            <div class="card-image">
              <Image src="/TS.png" width={80} height={80} />
            </div>
            <div class="card-info-wrapper">
              <div class="card-info">
                <i class="fa-duotone fa-person-from-portal"></i>
                <div class="card-info-title">
                  <h3 className="dark:text-white">TypeScript</h3>
                  <h4 className="dark:text-white/50">Javascript made sane</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card mx-1 my-1 shadow-md">
          <div class="card-content">
            <div class="card-image">
              <Image src="/framer.png" width={80} height={80} />
            </div>
            <div class="card-info-wrapper">
              <div class="card-info">
                <i class="fa-duotone fa-otter"></i>
                <div class="card-info-title">
                  <h3 className="dark:text-white">Framer Motion</h3>
                  <h4 className="dark:text-white/50">Animation Superpowers</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card mx-1 my-1 shadow-md">
          <div class="card-content">
            <div class="card-image">
              <Image src="/three.png" width={80} height={80} />
            </div>
            <div class="card-info-wrapper">
              <div class="card-info">
                <i class="fa-duotone fa-otter"></i>
                <div class="card-info-title">
                  <h3 className="dark:text-white">ThreeJS</h3>
                  <h4 className="dark:text-white/50">
                    where 3D graphics come to play
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card mx-1 my-1 shadow-md">
          <div class="card-content">
            <div class="card-image">
              <Image src="/redux.png" width={80} height={80} />
            </div>
            <div class="card-info-wrapper">
              <div class="card-info">
                <i class="fa-duotone fa-otter"></i>
                <div class="card-info-title">
                  <h3 className="dark:text-white">Redux</h3>
                  <h4 className="dark:text-white/50">
                    state management almost enjoyable
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tech;
