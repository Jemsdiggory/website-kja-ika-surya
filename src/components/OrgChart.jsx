import { hoverOrgNode } from '../utils/cardStyles'

function OrgNode({ children, variant = 'department', className = '' }) {
  const styles = {
    executive: 'bg-blue-900 text-white border-blue-950 hover:bg-blue-800 hover:ring-yellow-400/40',
    department: 'bg-blue-800 text-white border-blue-900 hover:bg-blue-700 hover:ring-yellow-400/30',
    operational: 'bg-amber-500 text-white border-amber-600 hover:bg-amber-400 hover:ring-amber-200/50',
  }

  return (
    <div
      className={[
        'px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg shadow-md border text-center',
        'text-[11px] sm:text-sm font-semibold leading-snug max-w-[11rem] sm:max-w-[12.5rem]',
        hoverOrgNode,
        styles[variant],
        className,
      ].join(' ')}
    >
      {children}
    </div>
  )
}

function VLine({ className = 'h-6' }) {
  return <div className={`w-0.5 bg-gray-400 mx-auto ${className}`} aria-hidden="true" />
}

function HLine({ className = '' }) {
  return <div className={`h-0.5 bg-gray-400 ${className}`} aria-hidden="true" />
}

function OrgChart() {
  return (
    <section className="py-16 px-4 sm:px-8 bg-white" aria-labelledby="org-chart-title">
      <div className="max-w-5xl mx-auto">
        <h2
          id="org-chart-title"
          className="text-2xl sm:text-3xl font-bold text-blue-900 text-center mb-3"
        >
          Struktur Organisasi KJA IKA SURYA
        </h2>
        <p className="text-gray-600 text-center text-sm mb-10 max-w-2xl mx-auto">
          Hierarki dan pembagian tugas di dalam kantor jasa akuntansi kami.
        </p>

        <div className="overflow-x-auto pb-4">
          <div className="min-w-[680px] max-w-4xl mx-auto flex flex-col items-center">
            <OrgNode variant="executive" className="max-w-[14rem] sm:max-w-none sm:min-w-[12rem]">
              Manager dan Partner
            </OrgNode>

            <VLine />

            <div className="relative w-full max-w-2xl">
              <HLine className="absolute top-0 left-[20%] right-[20%]" />
              <div className="grid grid-cols-2 gap-8 sm:gap-24">
                <div className="flex flex-col items-center">
                  <VLine className="h-6" />
                  <OrgNode variant="department">Bagian Keuangan</OrgNode>
                </div>
                <div className="flex flex-col items-center">
                  <VLine className="h-6" />
                  <OrgNode variant="department">Sekretaris</OrgNode>
                </div>
              </div>
            </div>

            <VLine className="h-8" />

            <div className="relative w-full max-w-4xl">
              <HLine className="absolute top-0 left-[8%] right-[8%]" />
              <div className="grid grid-cols-3 gap-3 sm:gap-6 items-start">
                <div className="flex flex-col items-center">
                  <VLine className="h-6" />
                  <OrgNode variant="operational">Supervisior</OrgNode>
                  <VLine />
                  <OrgNode variant="operational">Senior Auditor</OrgNode>
                  <VLine />
                  <OrgNode variant="operational">Junior Auditor</OrgNode>
                </div>

                <div className="flex flex-col items-center">
                  <VLine className="h-6" />
                  <OrgNode
                    variant="department"
                    className="max-w-[9.5rem] sm:max-w-[11rem] text-[10px] sm:text-xs"
                  >
                    Bagian Personalia Penelitian Pengembangan
                  </OrgNode>
                </div>

                <div className="flex flex-col items-center">
                  <VLine className="h-6" />
                  <OrgNode variant="operational">Bagian EDP</OrgNode>
                  <VLine />
                  <OrgNode variant="operational">Programmer</OrgNode>
                  <VLine />
                  <OrgNode variant="operational">Data Entry</OrgNode>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-10 text-xs text-gray-600">
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 rounded bg-blue-900" aria-hidden="true" />
            Pimpinan
          </span>
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 rounded bg-blue-800" aria-hidden="true" />
            Bagian
          </span>
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 rounded bg-amber-500" aria-hidden="true" />
            Operasional
          </span>
        </div>
      </div>
    </section>
  )
}

export default OrgChart
