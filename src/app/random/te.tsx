"use client";

import { Dialog, DialogPanel } from "@headlessui/react";

const Te = ({
  children,
  setCh,
  n,
  ch,
  id,
}: {
  children: React.ReactNode;
  setCh: any;
  n: any;
  ch: any;
  id: any;
}) => {
  return (
    <>
      <Dialog className="relative z-10" open={id === n} tabIndex={-1} onClose={() => {}}>
        <div className="fixed inset-0 z-10 w-full lg:w-2xl mx-auto overflow-y-auto">
          <div className="flex flex-col min-h-full items-center justify-center p-4 lg:text-2xl text-xl font-semibold text-white">
            <div className="mt-40" />
            <DialogPanel
              transition
              className="w-full flex-1 flex flex-col min-h-full  rounded-xl bg-white/5 p-3 backdrop-blur-2xl 
              duration-[400ms] ease-out data-closed:transform-[scale(90%)] data-closed:opacity-0"
            >
              <div className="flex-1 flex items-center justify-center">{children}</div>
              <div className="flex flex-col-reverse justify-between">
                <button
                  onClick={() => setCh(ch + 1)}
                  type="button"
                  className={`bg-cyan-500 px-3 py-1 rounded-lg focus:bg-cyan-800 `}
                >
                  سوال بعدی
                </button>
              </div>
            </DialogPanel>
            <div className="mt-40" />
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default Te;
