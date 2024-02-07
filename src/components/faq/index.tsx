import { FaqItem } from './faq-item'

import { uid } from 'radash'

const questions = [
  {
    id: uid(6),
    title: 'Bagaimana cara mengantisipasi banjir?',
    answer:
      'Menjaga lingkungan sekitar dengan tidak membuang sampah ke selokan maupun sungai yang dapat menyebabkan terhambatnya saluran air. Menghindari mendirikan bangunan di pinggiran sungai, selain hal ini bisa menjadi penyebab banjir, mendirikan hunian di pinggiran sungai akan membuat tidak teraturnya tatanan masyarakat.',
  },
  {
    id: uid(6),
    title: 'Apa langkah awal ketika terjadi banjir?',
    answer:
      'Melakukan evakuasi diri dan keluarga ke tempat yang lebih tinggi atau lebih aman. Menyiapkan peralatan yang diperlukan selama evakuasi, seperti senter, korek api, alat penerangan, dan peralatan darurat lainnya. Menyiapkan makanan kering atau instan. Menggunakan sepatu boot dan sarung tangan.',
  },
  {
    id: uid(6),
    title: 'Apa yang sebaiknya dilakukan setelah banjir surut?',
    answer:
      'Membersihkan rumah dari lumpur dan kotoran yang dibawa air banjir. Menyemprotkan disinfektan untuk mencegah penyakit. Memeriksa instalasi listrik dan gas sebelum digunakan kembali. Menghindari mengonsumsi makanan yang terendam air banjir. Melaporkan kerusakan rumah dan keadaan sekitar ke pihak berwenang.',
  },
  {
    id: uid(6),
    title: 'Apa saja yang perlu disiapkan sebelum musim hujan?',
    answer:
      'Memeriksa saluran air di sekitar rumah agar tidak tersumbat. Memastikan atap rumah tidak bocor dan mengalami kerusakan. Menyimpan dokumen-dokumen penting dalam wadah kedap air. Menyediakan peralatan darurat seperti senter, radio, dan alat komunikasi. Membuat rute evakuasi darurat.',
  },
  {
    id: uid(6),
    title: 'Bagaimana cara membuat rancangan tanggul darurat?',
    answer:
      'Menentukan titik-titik kritis yang rawan terkena banjir. Memilih bahan yang kuat dan tahan air untuk membuat tanggul. Menyusun rencana evakuasi jika tanggul tidak dapat menahan air. Melibatkan masyarakat sekitar dalam perencanaan tanggul darurat. Mengadakan simulasi untuk memastikan keefektifan tanggul.',
  },
  {
    id: uid(6),
    title: 'Apakah ada program bantuan untuk korban banjir?',
    answer:
      'Pemerintah biasanya memiliki program bantuan untuk korban banjir, termasuk penyediaan tempat pengungsian, bantuan pangan, pakaian, dan kebutuhan dasar lainnya. Selain itu, lembaga kemanusiaan dan relawan seringkali turut memberikan bantuan dalam bentuk logistik dan tenaga medis.',
  },
  {
    id: uid(6),
    title: 'Apa yang sebaiknya dihindari selama musim banjir?',
    answer:
      'Menghindari bermain di air banjir karena dapat membawa penyakit. Tidak menggunakan kendaraan untuk melewati jalan yang terendam air. Menjauhi daerah yang diketahui rawan longsor. Tidak membuang sampah sembarangan yang dapat menyumbat saluran air. Mengikuti petunjuk evakuasi yang telah ditentukan oleh pihak berwenang.',
  },
]

export function Faq() {
  return (
    <section className='py-4'>
      <h2 className='text-xl md:text-2xl mb-2 font-bold text-center text-balance'>
        Pertanyaan yang Sering Diajukan
      </h2>

      <div className='grid w-full'>
        {questions.map((question) => (
          <FaqItem key={question.id} {...question} />
        ))}
      </div>
    </section>
  )
}
