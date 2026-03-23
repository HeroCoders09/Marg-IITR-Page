export default function About() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:py-16">
        <h1 className="mb-8 text-center text-3xl sm:text-4xl font-bold text-neutral-900">
          About Us
        </h1>

        <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-sm">
          <div className="space-y-5 text-[17px] leading-8 text-neutral-700">
            <p>
              Memory is an essential attribute that helps an individual store and recollect
              relevant information. It was believed that the initial trace of memory is
              malleable and gets robust and solidified with time. However, targeting the
              memory process upon reactivation is susceptible to modifications.
            </p>

            <p>
              As a <strong>Memory and Anxiety Research Group (MARG)</strong>, we want to
              understand how memory can be updated upon reactivation. Different interventions,
              such as behavioural methods, neurostimulation, and CBT, may be helpful in
              memory updating.
            </p>

            <p>
              We focus on mixed methodology (qualitative and quantitative methods) and
              multi-measure assessment (physiological, behavioural, subjective responses)
              toward memory and anxiety research. We are open to national and international
              research collaboration.
            </p>

            <p>
              Please write to us at{" "}
              <a
                href="mailto:iitrmarg@gmail.com"
                className="font-semibold text-[#f0642b] hover:underline"
              >
                iitrmarg@gmail.com
              </a>{" "}
              for research collaboration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}