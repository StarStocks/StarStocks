<!-- portfoliocards.vue -->
<template>
	<br>
    <div class="container-fluid">

        <div class="row mt-5">
            <div class="col-sm-4 col-md-3 col-lg-2">
				<div class="card">
					<h1 class="card-img-top f-w-900 px-2" style="background-color:#05152a; color:#fff;">250</h1>
					<div class="image-container">
						<img src="https://techpresso.co.uk/wp-content/uploads/2024/01/Max_VanSchapps.png" class="" width="100%"/>
						<div class="gradient-overlay"></div>
					</div>

					<div class="card-body pt-0 px-0">
						<div class="flex-row justify-content-between text-center mb-0 px-3">
							<h3 class="f-w-900 mb-0">VanSchapps</h3>
							<h6 class="text-muted f-w-600 mb-0">MOTORLEAGUE ONE</h6>
							<h6 class="text-muted f-w-200 mb-0">TEAM BLUE</h6>
						</div>
						<hr class="mt-2 mx-3" />
						<div class="d-flex flex-row justify-content-between px-3 pb-4">
							<div class="d-flex flex-column">
							<h6 class="text-muted mb-0">Shares Owned</h6>
							<small class="text-muted mb-0">Excludes Sold</small>
							<h6 class="text-muted mb-0">Gained</h6>
							<small class="text-muted mb-0">Invested 1,000</small>
							<h6 class="text-muted mb-0">Average Price</h6>
							<h6 class="text-muted mb-0">Current Value</h6>
							</div>
							<div class="d-flex flex-column">
							<h6 class="mb-0">101.00</h6>
							<small class="mb-0 text-muted text-right">(0 Sold)</small>
							<h6 class="mb-0">101.00</h6>
							<small class="text-muted mb-0">Returned 1,000</small>
							<h6 class="mb-0">101.00</h6>
							<h6 class="mb-0">101.00</h6>
							</div>
						</div>
						<div class="d-flex flex-row mid justify-content-between px-2 pt-1 pb-1" style="background-color:#6ab855; color:#fff">
							<div class="d-flex flex-column">
								<h6 class="mb-0">Profit/Loss</h6>
							</div>
							<div class="d-flex flex-column">
							<h5 class="mb-0">+101.00</h5>
							</div>
						</div>
						<div class="mx-0 mt-3 mb-0 text-center">
							<button type="button" class="btn btn-primary btn-block mb-0 me-3">
							<small>BUY</small>
							</button>
							<button type="button" class="btn btn-secondary btn-block">
							<small>SELL</small>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	
</template>

<script>
export default {};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap");

body {
    background: #f5f1ee;
    font-family: "Roboto", sans-serif;
}

.card {
    width: 250px;
    border-radius: 10px;
}

.card-img-top {
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    margin-bottom: -1em;
    z-index: 1;
}

.card-body {
    position: relative;
    z-index: 3;
    background: white;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    margin-top: -4em;
    padding-top: 4em;
}

.image-container {
    position: relative;
    z-index: 2;
}

.gradient-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 50%);
}
span.text-muted {
  font-size: 12px;
}
small.text-muted {
  font-size: 8px;
}
h5.mb-0 {
  font-size: 1rem;
}
small.ghj {
  font-size: 9px;
}
.mid {
  background: #ecedf1;
}
h6.ml-1 {
  font-size: 13px;
}
small.key {
  text-decoration: underline;
  font-size: 9px;
  cursor: pointer;
}
.btn-danger {
  color: #ffcbd2;
}
.btn-danger:focus {
  box-shadow: none;
}
small.justify-content-center {
  font-size: 9px;
  cursor: pointer;
  text-decoration: underline;
}

@media screen and (max-width: 600px) {
  .col-sm-4 {
    margin-bottom: 50px;
  }
}
</style>
