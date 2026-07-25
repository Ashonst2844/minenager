# Architect

## A. System Design
- Aplikasi Web untuk Mobile sebagai platform utamanya
- Aplikasi yang dapat berguna untuk para **Mahasiswa**
- Memiliki fitur-fitur:
  - Mengatur jadwal kelas untuk setiap harinya : 
    - Hari Apa?
    - Jam Berapa?
    - Apa mata kuliahnya?
    - Dan siapa dosennya?
  - Mengatur deadline tugas kuliah:
    - Apa mata kuliahnya?
    - Apa tugasnya?
    - Kapan deadlinenya?
    - Siapa dosennya?
    - Link/File tugasnya? (opsional)
    - Status tugasnya? (Sudah Selesai / Belum)
  - Membuat To-Do-List:
    - Apa nama tugasnya?
    - Apa deskripsi tugasnya?
    - Kapan daedline tugasnya? (optional)
    - Status tugasnya? (Sudah Selesai / Belum)
  - Statistik nilai mahasiswa:
    - Menghitung Rata-rata nilai yang di input oleh User ataupun (per semesternya)
    - Berisi data apa tugasnyanya? Berapa nilainya? Dan Selesai tanggal berapa?
- Aplikasi ini akan berguna untuk Manajemen nilai sehingga dapat membantu pengguna agar tetap terus semangat dalam mencapai tujuannya
- Memiliki sistem payment untuk mendapatkan fitur lebih

## B. Framework
Menggunakan Framework [React.JS + TypeScript](https://react.dev/)

## C. Library
- [TailwindCSS](https://tailwindcss.com/) : Untuk *System Styling* > [UI/UX Design](design.md)
- [GSAP](https://gsap.com/) : Library Untuk *Animating*

## D. Third-Party-Tech 
- [Supabase](https://supabase.com/) : Untuk mengatur database dan authentication, [Database Scheme](scheme.md)

## E. Navigasi
[System Flow](workflow.md)

(*app.tsx*)
**/** : (*home.tsx*) 
**/register** : (*register.tsx*)
    - **/register#sign_in**
    - **/register#login**
**/schedules** : (*schedules.tsx*)
**/tasks** : (*tasks.tsx*)
    - **/tasks/class** (*tasks/class.tsx*)
    - **/tasks/todolist** (*tasks/todolist.tsx*)
**/stats** : (*stats.tsx*)