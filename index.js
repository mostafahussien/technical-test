var formSubmit = function () {
    var width = document.getElementById("width").value;
    var height = document.getElementById("height").value;
    var padding = document.getElementById("padding").value;
    let output = document.querySelector("pre");

    if (width !== "" && height !== "" && padding !== "") {
        if (width >= 20 && width % 2 == 0 && height >= 20 && height % 2 == 0 && padding >= 4 && padding % 2 == 0) {
            let array = draw(width, height, padding);
            output.textContent = array.map(horizontalLine => horizontalLine.map(i => " -|"[i]).join``).join`\n`;
        } else {
            alert("Please enter valid values: \nWidth should be even and >=20, Height should be even and >=20, Padding should be even and >=4");
        }
    } else {
        alert("Please enter the values");
    }
}

function draw(width, height, padding) {

    var paddingAverage = 1 + (padding / 2);

    return Array.from({ length: height }, (_, horizontalLine) => {

        if (horizontalLine >= height / 2) {

            horizontalLine = height - horizontalLine - 1
        }

        return Array.from({ length: width }, (_, verticalLine) => {

            if (verticalLine >= width / 2) {

                verticalLine = width - verticalLine - 1
            }

            if (horizontalLine % paddingAverage === 0 && horizontalLine <= verticalLine) {
                return 1
            }

            if (verticalLine % paddingAverage === 0 && verticalLine <= horizontalLine) {
                return 2
            }

            return 0;
        });
    });
}