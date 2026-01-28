import { useEffect } from "react";
import { Modal, initTWE } from "tw-elements";
import Header from "./components/Header.jsx";
function App() {
  useEffect(() => {
    initTWE({ Modal});
  }, []);
  return (
    <>
    <Header />
      {/* BUTTON */}
      <button
        type="button"
        className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white"
        data-twe-toggle="modal"
        data-twe-target="#exampleModal"
        
        data-twe-ripple-color="light"
      >
        Launch demo modal
      </button>

      {/* MODAL */}
      <div
        data-twe-modal-init
        className="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          data-twe-modal-dialog-ref
          className="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]"
        >
          <div className="pointer-events-auto relative flex w-full flex-col rounded-md bg-white shadow">
            {/* HEADER */}
            <div className="flex items-center justify-between border-b p-4">
              <h5 className="text-xl font-medium" id="exampleModalLabel">
                Modal title
              </h5>
              <button data-twe-modal-dismiss>✕</button>
            </div>

            {/* BODY */}
            <div className="p-4" data-twe-modal-body-ref>
              Modal body text goes here.
            </div>

            {/* FOOTER */}
            <div className="flex justify-end gap-2 border-t p-4">
              <button
                data-twe-modal-dismiss
                className="rounded bg-gray-200 px-4 py-2"
              >
                Close
              </button>
              <button className="rounded bg-primary px-4 py-2 text-white">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export default App;
