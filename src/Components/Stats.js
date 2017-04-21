
// class Stats extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: []
//     }
//     this.loadData = this.loadData.bind(this);
//   }
//
//   componentDidMount() {
//     this.loadData()
//   }
//
//   loadData() {
//     axios.get('/api/food-logs')
//       .then((res) => {
//         this.setState({
//           data: res.data
//         })
//         const stats = this.state.data.map(function(item) {
//           return item.food.nutrients.reduce(function(acc, nutrient) {
//             acc[nutrient.name] = nutrient.value
//             return acc
//           },{})
//         })
//         console.log(stats)
//         const names = Object.keys(stats[0])
//         const stats = stats.map(function(stat) {
//           if (stat.hasOwnProperty(names))
//         })
//       })
//       .catch((err) => {
//         console.log(err)
//       })
//   }
//
//
//   render() {
//
//
//     // const result = stats.reduce(function(acc, stat) {
//     //   if (stat.h)
//     //   return
//     // },{})
//     // const names = Object.keys(stats)
//     // const names = Object.keys(stats[0])
//     // console.log(names);
//     return (
//       <div>
//       <NavBar/>
//       <Grid>
//       <Row>
//       <Col xs={12}>
//       <h1>Stats</h1>
//       <Table>
//       </Table>
//       </Col>
//       </Row>
//       </Grid>
//       </div>
//     )
//   }
// }
