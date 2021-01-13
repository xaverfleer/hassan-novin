import index from '../../pages/index'

const absLink = (relLink) => (relLink ? relLink.split('../../static')[1] : '')

export default ({ entry }) => {
  const data = entry.getIn(['data']).toJS()

  data.gallery = data.gallery.map((g) => ({
    ...g,
    img: {
      childImageSharp: { fluid: { aspectRatio: 1.33, src: absLink(g.img) } },
    },
  }))

  return index({
    data: {
      allMarkdownRemark: { nodes: [{ frontmatter: { ...data } }] },
    },
  })
}
