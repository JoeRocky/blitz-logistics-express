import { Title } from "@solidjs/meta";
import { A } from "@solidjs/router";
import { twMerge } from "tailwind-merge";
import { buttonVariants } from "~/components/ui/button";

export default function Home() {
  return (
  <>
    <Title>Home - Rasch Logistics Express</Title>
    <header class="text-center mx-auto text-gray-200 h-[90vh] max-h-[90vh] overflow-hidden">
      {/* Background */}
      <div class="absolute w-full h-full max-h-[90vh] overflow-hidden flex justify-center items-center">
        <img
          src={import.meta.env.SERVER_BASE_URL + "/title_img_home.jpg"}
          class="flex-shrink-0 min-h-full min-w-full max-h-[90vh] md:max-h-none max-w-none md:max-w-full"
          alt="Solid"
        />
      </div>

      {/* Background Gradient */}
      <div class="absolute w-full h-full max-h-[90vh] bg-[rgba(0,0,0,0.5)] sm:bg-transparent sm:bg-gradient-to-r sm:from-[rgba(0,0,0,0.9)] sm:to-[rgba(0,0,0,0.0)]"></div>

      {/* Title */}
      <div class="absolute w-full h-full max-h-[90vh] p-20 sm:p-32 md:p-48 xl:p-64 overflow-hidden flex justify-center sm:justify-start items-start sm:items-center">
        <div class="flex flex-col">
          <h1 class="text-gray-200 drop-shadow-[0px_0px_10px_rgba(0,0,0,1)] xl:drop-shadow-none uppercase text-center sm:text-left text-5xl sm:text-6xl md:text-7xl xl:text-8xl leading-[4rem] sm:leading-[5rem] md:leading-[6rem] xl:leading-[8rem]">
            Rasch<br/>
            Logistics<br/>
            Express 
          </h1>
          <div class="flex flex-col sm:flex-row justify-start items-center my-2">
            <svg class="my-2 sm:my-0 mx-8 w-20 h-20" xmlns="http://www.w3.org/2000/svg" version="1.1" width="256" height="256" viewBox="0 0 256 256">
              <defs>
              </defs>
              <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
                <path class="fill-gray-200" d="M 65.745 63.947 H 40.269 c -1.104 0 -2 -0.896 -2 -2 s 0.896 -2 2 -2 h 23.477 V 25.292 c 0 -0.926 -0.753 -1.679 -1.679 -1.679 H 13.093 c -1.104 0 -2 -0.896 -2 -2 s 0.896 -2 2 -2 h 48.973 c 3.131 0 5.679 2.548 5.679 5.679 v 36.655 C 67.745 63.052 66.85 63.947 65.745 63.947 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10;  fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                <path class="fill-gray-200" d="M 27.389 63.947 H 13.093 c -1.104 0 -2 -0.896 -2 -2 s 0.896 -2 2 -2 h 14.295 c 1.104 0 2 0.896 2 2 S 28.493 63.947 27.389 63.947 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10;  fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                <path class="fill-gray-200" d="M 83.897 63.947 H 82.74 c -1.104 0 -2 -0.896 -2 -2 s 0.896 -2 2 -2 h 1.157 c 1.159 0 2.103 -0.943 2.103 -2.103 V 39.502 c 0 -2.155 -0.967 -4.16 -2.653 -5.501 l -5.252 -4.177 c -1.238 -0.986 -2.792 -1.528 -4.375 -1.528 h -5.975 v 31.651 h 2.115 c 1.104 0 2 0.896 2 2 s -0.896 2 -2 2 h -4.115 c -1.104 0 -2 -0.896 -2 -2 V 26.296 c 0 -1.104 0.896 -2 2 -2 h 7.975 c 2.483 0 4.922 0.852 6.865 2.398 l 5.252 4.176 C 88.482 32.976 90 36.122 90 39.502 v 18.342 C 90 61.21 87.263 63.947 83.897 63.947 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10;  fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                <path class="fill-gray-200" d="M 88 46.343 H 75.345 c -2.413 0 -4.376 -1.962 -4.376 -4.375 V 26.296 c 0 -1.104 0.896 -2 2 -2 s 2 0.896 2 2 v 15.671 c 0 0.207 0.169 0.375 0.376 0.375 H 88 c 1.104 0 2 0.896 2 2 S 89.104 46.343 88 46.343 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10;  fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                <path class="fill-gray-200" d="M 33.829 70.387 c -4.654 0 -8.44 -3.786 -8.44 -8.439 c 0 -4.654 3.786 -8.44 8.44 -8.44 s 8.44 3.786 8.44 8.44 C 42.269 66.601 38.482 70.387 33.829 70.387 z M 33.829 57.507 c -2.448 0 -4.44 1.992 -4.44 4.44 s 1.992 4.439 4.44 4.439 s 4.44 -1.991 4.44 -4.439 S 36.277 57.507 33.829 57.507 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10;  fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                <path class="fill-gray-200" d="M 76.301 70.387 c -4.654 0 -8.44 -3.786 -8.44 -8.439 c 0 -4.654 3.786 -8.44 8.44 -8.44 c 4.653 0 8.439 3.786 8.439 8.44 C 84.74 66.601 80.954 70.387 76.301 70.387 z M 76.301 57.507 c -2.448 0 -4.44 1.992 -4.44 4.44 s 1.992 4.439 4.44 4.439 s 4.439 -1.991 4.439 -4.439 S 78.749 57.507 76.301 57.507 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10;  fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                <path class="fill-gray-200" d="M 65.745 51.788 H 33.829 c -1.104 0 -2 -0.896 -2 -2 s 0.896 -2 2 -2 h 31.917 c 1.104 0 2 0.896 2 2 S 66.85 51.788 65.745 51.788 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10;  fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                <path class="fill-gray-200" d="M 88 51.788 h -8.641 c -1.104 0 -2 -0.896 -2 -2 s 0.896 -2 2 -2 H 88 c 1.104 0 2 0.896 2 2 S 89.104 51.788 88 51.788 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10;  fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                <circle class="fill-gray-200" cx="33.834" cy="61.944" r="1.634" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10;  fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/>
                <circle class="fill-gray-200" cx="76.304" cy="61.944" r="1.634" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10;  fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/>
                <path class="fill-gray-200" d="M 83.897 63.947 H 82.74 c -1.104 0 -2 -0.896 -2 -2 s 0.896 -2 2 -2 h 1.157 c 1.159 0 2.103 -0.943 2.103 -2.103 V 39.502 c 0 -2.155 -0.967 -4.16 -2.653 -5.501 l -5.252 -4.177 c -1.238 -0.986 -2.792 -1.528 -4.375 -1.528 h -5.975 v 31.651 h 2.115 c 1.104 0 2 0.896 2 2 s -0.896 2 -2 2 h -4.115 c -1.104 0 -2 -0.896 -2 -2 V 26.296 c 0 -1.104 0.896 -2 2 -2 h 7.975 c 2.483 0 4.922 0.852 6.865 2.398 l 5.252 4.176 C 88.482 32.976 90 36.122 90 39.502 v 18.342 C 90 61.21 87.263 63.947 83.897 63.947 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10;  fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                <path class="fill-gray-200" d="M 24.021 51.788 H 2.165 c -1.104 0 -2 -0.896 -2 -2 s 0.896 -2 2 -2 h 21.856 c 1.104 0 2 0.896 2 2 S 25.125 51.788 24.021 51.788 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10;  fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                <path class="fill-gray-200" d="M 45.165 36.186 H 2 c -1.104 0 -2 -0.896 -2 -2 s 0.896 -2 2 -2 h 43.165 c 1.104 0 2 0.896 2 2 S 46.27 36.186 45.165 36.186 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10;  fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                <path class="fill-gray-200" d="M 65.745 36.186 H 55.228 c -1.104 0 -2 -0.896 -2 -2 s 0.896 -2 2 -2 h 10.518 c 1.104 0 2 0.896 2 2 S 66.85 36.186 65.745 36.186 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10;  fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
              </g>
            </svg>
            <A href={"/kontakt"} class={twMerge(buttonVariants({size: "lg"}), "mx-2 font-bold bg-sky-700 hover:bg-gray-200 text-gray-200 hover:text-sky-700 ")}>
              Kontaktiere uns
            </A>
          </div>
        </div>
      </div>
    </header>
    
    {/* Second Section */}
    <section class="mx-auto text-gray-200 overflow-hidden px-[10%] sm:px-[20%] md:px-[25%] py-10">
      <h1 class="uppercase text-2xl lg:text-3xl my-3">Ihr zuverlässiger Transportpartner!</h1>
      <div class="my-10">
        <h2 class=" text-xl lg:text-2xl my-2">Ihr Ansprechpartner für verschiedene Transportaufträge bundesweit</h2>
        <p>
        Für die anspruchsvollen Transporte haben Sie mit uns den richtigen Ansprechpartner gefunden. Wir sind auf diverse Transportdienstleistungen spezialisiert. Sie profitieren von einer professionellen Dienstleistung und haben die Gewissheit, dass Ihre Produkte sicher an den Zielort gelangen. Sprechen Sie uns auf unseren Service an, wir stehen als Transportdienst bereit.
        </p>
      </div>
      <div class="my-10">
        <h2 class=" text-xl lg:text-2xl my-2">Transportdienst</h2>
        <p>
        Zu unserem Angebot gehören auch Eilaufträge. Denn wir richten unsere Dienstleistung flexibel nach Ihrem Bedarf aus und sind mit diesem Konzept erfolgreich am Markt vertreten. Kommen Sie zu uns für Ihren deutschlandweiten Transport. 
        <br/>Für unsere Kunden finden wir immer eine passende Lösung. Dabei spielt es für uns keine Rolle, was Sie transportieren möchten.
        </p>
      </div>
      <div class="my-10">
        <h2 class="text-xl lg:text-2xl my-2">Sonderfahrten und terminierte Transporte<br/> Die Fahrten werden auf Wunsch deutschlandweit durchgeführt. </h2>
      </div>
      <div class="my-10">
        <h2 class="text-xl lg:text-2xl my-2">Wir sind ein Kurierdienst, der wirklich etwas bewegt. Bei uns kommt die bestellte Ware ordnungsgemäß und pünktlich am Bestimmungsort an. Verlassen Sie sich auf unsere Erfahrung und setzen Sie mit uns auf ein modernes Transportunternehmen.</h2>
      </div>
      <div class="my-10">
        <p>
        Wenn Sie maßgeschneiderte Transportlösungen suchen, sind Sie bei uns gut aufgehoben. Wir engagieren uns für Ihren Transportauftrag und stellen den Erfolg sicher. Das ist ein Vorteil für viele gewerbliche Kunden. Wer an zuverlässigen Transportfahrten interessiert ist, kommt bundesweit zu uns. Auf Ihren Auftrag sind wir bereits gespannt und wir freuen uns auf die Zusammenarbeit.
        </p>  
      </div>
    </section>
  </>
  );
}
