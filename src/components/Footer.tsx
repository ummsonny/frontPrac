export default function Footer() {
  const thisYear = new Date().getFullYear()
  return <footer>Copyright@{thisYear}</footer>
}
