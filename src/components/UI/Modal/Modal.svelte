<!-- if you're not using typescript, remove lang="ts" attribute from the script tag -->
<script>
    export let isOpen = false
    function open() {
        isOpen = true
    }
    export function close() {
        isOpen = false
    }
</script>

<slot name="trigger" {open}>
    <!-- fallback trigger to open the modal -->
    <button on:click={open}>Open</button>
</slot>

{#if isOpen}
    <div class="modal">
        <div class="backdrop" on:click={close} />

        <div class="content-wrapper">
            <slot name="header">
                <!-- fallback -->
                <div>
                    <h1>Your Modal Heading Goes Here...</h1>
                </div>
            </slot>

            <div class="content">
                <slot name="content" />
            </div>

            <slot name="footer" {close}>
                <!-- fallback -->
                <div>
                    <h1>Your Modal Footer Goes Here...</h1>
                    <button on:click={close}>close</button>
                </div>
            </slot>
        </div>
    </div>
{/if}

<style>
    div.modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;

        display: flex;
        justify-content: center;
        align-items: center;
    }
    div.backdrop {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.4);
    }
    div.content-wrapper {
        z-index: 10;
        max-width: 70vw;
        border-radius: 0.3rem;
        background-color: white;
        overflow: hidden;
    }
    div.content {
        max-height: 50vh;
        overflow: auto;
    }
</style>


<!--<script>-->
<!--    export let isOpening = true-->

<!--    function isOpen(){-->
<!--        isOpening = true-->
<!--    }-->
<!--    function isClosed() {-->
<!--        isOpening = false-->
<!--    }-->
<!--</script>-->

<!--{#if isOpening}-->
<!--    <slot />-->
<!--{/if}-->

<!-- =========================================================================== -->


<!--<script context="module" lang="ts">-->
<!--    // for passing focus on to the next Modal in the queue.-->
<!--    // A module context level object is shared among all its component instances. [Read More Here](https://svelte.dev/tutorial/sharing-code)-->
<!--    const modalList: HTMLElement[] = []-->
<!--</script>-->


<!--<script lang="ts">-->
<!--    import { booleanStore } from './store-modal'-->

<!--    const store = booleanStore(false)-->
<!--    const { isOpen, open, close } = store-->
<!--    function keydown(e: KeyboardEvent) {-->
<!--        e.stopPropagation()-->
<!--        if (e.key === 'Escape') {-->
<!--            close()-->
<!--        }-->
<!--    }-->
<!--    function transitionend(e: TransitionEvent) {-->
<!--        const node = e.target as HTMLElement-->
<!--        node.focus()-->
<!--    }-->
<!--    function modalAction(node: HTMLElement) {-->
<!--        const returnFn = []-->
<!--        // for accessibility-->
<!--        if (document.body.style.overflow !== 'hidden') {-->
<!--            const original = document.body.style.overflow-->
<!--            document.body.style.overflow = 'hidden'-->
<!--            returnFn.push(() => {-->
<!--                document.body.style.overflow = original-->
<!--            })-->
<!--        }-->
<!--        node.addEventListener('keydown', keydown)-->
<!--        node.addEventListener('transitionend', transitionend)-->
<!--        node.focus()-->
<!--        modalList.push(node)-->
<!--        returnFn.push(() => {-->
<!--            node.removeEventListener('keydown', keydown)-->
<!--            node.removeEventListener('transitionend', transitionend)-->
<!--            modalList.pop()-->
<!--            // Optional chaining to guard against empty array.-->
<!--            modalList[modalList.length - 1]?.focus()-->
<!--        })-->
<!--        return {-->
<!--            destroy: () => returnFn.forEach((fn) => fn()),-->
<!--        }-->
<!--    }-->
<!--</script>-->


<!--<style>-->
<!--    div.modal {-->
<!--        position: fixed;-->
<!--        top: 0;-->
<!--        left: 0;-->
<!--        width: 100%;-->
<!--        height: 100vh;-->
<!--        display: flex;-->
<!--        justify-content: center;-->
<!--        align-items: center;-->
<!--    }-->
<!--    div.backdrop {-->
<!--        position: absolute;-->
<!--        width: 100%;-->
<!--        height: 100%;-->
<!--        background-color: rgba(0, 0, 0, 0.4);-->
<!--    }-->
<!--    div.content-wrapper {-->
<!--        z-index: 10;-->
<!--        max-width: 70vw;-->
<!--        border-radius: 0.3rem;-->
<!--        background-color: white;-->
<!--        overflow: hidden;-->
<!--    }-->
<!--    div.content {-->
<!--        max-height: 50vh;-->
<!--        overflow: auto;-->
<!--        resize: both;-->
<!--        display: inline-block;-->
<!--        background-color: lightgray;-->
<!--    }-->
<!--    .wrapper{-->
<!--        resize: both;-->
<!--        display: inline-block;-->
<!--        overflow: auto;-->
<!--        /*min-width: 550px;*/-->
<!--        /*min-height: 550px;*/-->
<!--        background-color: red;-->
<!--    }-->
<!--</style>-->


<!--<slot name="trigger" {open}>-->
<!--    &lt;!&ndash; fallback trigger to open the modal &ndash;&gt;-->
<!--    <button on:click={open}>Open</button>-->
<!--</slot>-->


<!--<slot name="trigger" {open}>-->
<!--    &lt;!&ndash; fallback trigger to open the modal &ndash;&gt;-->
<!--    <button on:click={open}>Open</button>-->
<!--</slot>-->
<!--{#if $isOpen}-->
<!--    <div class="modal" use:modalAction tabindex="0">-->
<!--        <div class="backdrop" on:click={close} />-->

<!--        <div class="content-wrapper">-->
<!--            <slot name="header" {store}>-->
<!--                &lt;!&ndash; fallback &ndash;&gt;-->
<!--                <div>-->
<!--                    <h1>Your Modal Heading Goes Here...</h1>-->
<!--                </div>-->
<!--            </slot>-->

<!--            <div class="content">-->
<!--                <slot name="content" {store} />-->
<!--            </div>-->

<!--            <slot name="footer" {store}>-->
<!--                &lt;!&ndash; fallback &ndash;&gt;-->
<!--                <div>-->
<!--                    <h1>Your Modal Footer Goes Here...</h1>-->
<!--                    <button on:click={close}>Close</button>-->
<!--                </div>-->
<!--            </slot>-->
<!--        </div>-->

<!--    </div>-->
<!--{/if}-->


<!--<script>-->
<!--    let isOpen = false-->
<!--    export function open() {-->
<!--        isOpen = true-->
<!--    }-->
<!--    export function close() {-->
<!--        isOpen = false-->
<!--    }-->

<!--    function keydown(e) {-->
<!--        e.stopPropagation()-->
<!--        if (e.key === 'Escape') {-->
<!--            close()-->
<!--        }-->
<!--    }-->
<!--</script>-->
