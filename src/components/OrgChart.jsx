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
        'text-xs sm:text-sm font-semibold leading-snug w-full max-w-[16rem] sm:max-w-[12.5rem]',
        hoverOrgNode,
        styles[variant],
        className,
      ].join(' ')}
    >
      {children}
    </div>
  )
}

function VLine({ className = 'h-5 sm:h-6' }) {
  return <div className={`w-0.5 bg-gray-400 mx-auto shrink-0 ${className}`} aria-hidden="true" />
}

function HLine({ className = '' }) {
  return <div className={`h-0.5 bg-gray-400 ${className}`} aria-hidden="true" />
}

function ChartLegend() {
  return (
    <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mt-8 sm:mt-10 text-xs text-gray-600">
      <span className="flex items-center gap-2">
        <span className="w-3 h-3 rounded bg-blue-900 shrink-0" aria-hidden="true" />
        Pimpinan
      </span>
      <span className="flex items-center gap-2">
        <span className="w-3 h-3 rounded bg-blue-800 shrink-0" aria-hidden="true" />
        Bagian
      </span>
      <span className="flex items-center gap-2">
        <span className="w-3 h-3 rounded bg-amber-500 shrink-0" aria-hidden="true" />
        Operasional
      </span>
    </div>
  )
}

function OrgChartMobile() {
  return (
    <div className="md:hidden flex flex-col items-center w-full max-w-sm mx-auto">
      <OrgNode variant="executive" className="max-w-full">
        Manager dan Partner
      </OrgNode>

      <VLine />

      <div className="w-full grid grid-cols-1 min-[400px]:grid-cols-2 gap-3">
        <div className="flex flex-col items-center">
          <VLine className="h-4" />
          <OrgNode variant="department" className="max-w-full">
            Bagian Keuangan
          </OrgNode>
        </div>
        <div className="flex flex-col items-center">
          <VLine className="h-4" />
          <OrgNode variant="department" className="max-w-full">
            Sekretaris
          </OrgNode>
        </div>
      </div>

      <VLine className="h-6" />

      <div className="w-full flex flex-col items-center gap-4">
        <div className="flex flex-col items-center w-full">
          <p className="text-[10px] uppercase tracking-wide text-gray-400 font-medium mb-2">Audit</p>
          <OrgNode variant="operational" className="max-w-full">Supervisior</OrgNode>
          <VLine className="h-4" />
          <OrgNode variant="operational" className="max-w-full">Senior Auditor</OrgNode>
          <VLine className="h-4" />
          <OrgNode variant="operational" className="max-w-full">Junior Auditor</OrgNode>
        </div>

        <OrgNode variant="department" className="max-w-full text-[11px]">
          Bagian Personalia Penelitian Pengembangan
        </OrgNode>

        <div className="flex flex-col items-center w-full">
          <p className="text-[10px] uppercase tracking-wide text-gray-400 font-medium mb-2">EDP</p>
          <OrgNode variant="operational" className="max-w-full">Bagian EDP</OrgNode>
          <VLine className="h-4" />
          <OrgNode variant="operational" className="max-w-full">Programmer</OrgNode>
          <VLine className="h-4" />
          <OrgNode variant="operational" className="max-w-full">Data Entry</OrgNode>
        </div>
      </div>
    </div>
  )
}

function OrgChartDesktop() {
  return (
    <div className="hidden md:block overflow-x-auto pb-4 -mx-2 px-2">
      <div className="min-w-[640px] lg:min-w-0 max-w-4xl mx-auto flex flex-col items-center">
        <OrgNode variant="executive" className="sm:min-w-[12rem] max-w-none">
          Manager dan Partner
        </OrgNode>

        <VLine />

        <div className="relative w-full max-w-2xl">
          <HLine className="absolute top-0 left-[20%] right-[20%]" />
          <div className="grid grid-cols-2 gap-12 lg:gap-24">
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
          <div className="grid grid-cols-3 gap-4 lg:gap-6 items-start">
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
              <OrgNode variant="department" className="max-w-[11rem] text-xs">
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
  )
}

function OrgChart() {
  return (
    <section className="py-10 sm:py-16 px-4 sm:px-8 bg-white" aria-labelledby="org-chart-title">
      <div className="max-w-5xl mx-auto">
        <h2
          id="org-chart-title"
          className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900 text-center mb-2 sm:mb-3 px-2"
        >
          Struktur Organisasi KJA IKA SURYA
        </h2>
        <p className="text-gray-600 text-center text-xs sm:text-sm mb-8 sm:mb-10 max-w-2xl mx-auto px-2">
          Hierarki dan pembagian tugas di dalam kantor jasa akuntansi kami.
        </p>

        <OrgChartMobile />
        <OrgChartDesktop />
        <ChartLegend />
      </div>
    </section>
  )
}

export default OrgChart
