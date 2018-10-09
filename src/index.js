import { h, Element } from "atomico";
import style from "./style.this.css";

export class Tag extends Element {
    constructor() {
        super();
        this.isHidden = false;
        this.classHidden = "hidden";
    }
    static get props() {
        return ["button-color", "button-label"];
    }
    toggle(force) {
        this.classList.toggle(
            this.classHidden,
            (this.isHidden = force !== undefined ? force : !this.isHidden)
        );
    }
    render() {
        return (
            <div class="popup-container">
                {this.props.children}
                <button
                    style={{ color: this.props.buttonColor || "#fff" }}
                    class="popup-button"
                    click={() => this.toggle()}
                >
                    <div>{this.props.buttonLabel || "CERRAR"}</div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 44 44"
                        width="40px"
                        height="40px"
                    >
                        <path
                            d="M22 0C9.8 0 0 9.8 0 22s9.8 22 22 22 22-9.8 22-22S34.2 0 22 0zm3.2 22.4l7.5 7.5c.2.2.3.5.3.7s-.1.5-.3.7l-1.4 1.4c-.2.2-.5.3-.7.3-.3 0-.5-.1-.7-.3l-7.5-7.5c-.2-.2-.5-.2-.7 0l-7.5 7.5c-.2.2-.5.3-.7.3-.3 0-.5-.1-.7-.3l-1.4-1.4c-.2-.2-.3-.5-.3-.7s.1-.5.3-.7l7.5-7.5c.2-.2.2-.5 0-.7l-7.5-7.5c-.2-.2-.3-.5-.3-.7s.1-.5.3-.7l1.4-1.4c.2-.2.5-.3.7-.3s.5.1.7.3l7.5 7.5c.2.2.5.2.7 0l7.5-7.5c.2-.2.5-.3.7-.3.3 0 .5.1.7.3l1.4 1.4c.2.2.3.5.3.7s-.1.5-.3.7l-7.5 7.5c-.2.1-.2.5 0 .7z"
                            fill={this.props.buttonColor || "#fff"}
                        />
                    </svg>
                </button>
            </div>
        );
    }
}

style("atom-popup");
customElements.define("atom-popup", Tag);
