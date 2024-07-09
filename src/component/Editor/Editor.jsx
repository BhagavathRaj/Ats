import React, { useCallback, useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { styled } from "@mui/material/styles";


import Heading from '@tiptap/extension-heading';

import Dropcursor from '@tiptap/extension-dropcursor';
import Image from '@tiptap/extension-image';
import { useEditor, Editor } from '@tiptap/react';
import { EditorContent, BubbleMenu } from '@tiptap/react';
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import TextStyle from '@tiptap/extension-text-style';
import Link from '@tiptap/extension-link';
import Bold from '@tiptap/extension-bold';
import Underline from '@tiptap/extension-underline';
import Italic from '@tiptap/extension-italic';
import Strike from '@tiptap/extension-strike';
import Code from '@tiptap/extension-code';
import History from '@tiptap/extension-history';
import FontFamily from '@tiptap/extension-font-family';
// import { AttachmentP } from './Dropzone';
// import { AttachReact } from './attachment-extension-react';
// import { Attachment } from './Attachment';
import axios from 'axios';
import { FontSize } from './Fontsize';
import Color from '@tiptap/extension-color';
import Highlight from '@tiptap/extension-highlight';
import TextAlign from '@tiptap/extension-text-align';
import BulletList from '@tiptap/extension-bullet-list';
import OrderedList from '@tiptap/extension-ordered-list';
import ListItem from '@tiptap/extension-list-item';

import { FormatListBulleted } from '@mui/icons-material';
import { FormatListNumbered } from '@mui/icons-material';
import TextFormatOutlinedIcon from '@mui/icons-material/TextFormatOutlined';
import Superscript from '@tiptap/extension-superscript';
import HorizontalRule from '@tiptap/extension-horizontal-rule';
import TableViewSharpIcon from '@mui/icons-material/TableViewSharp';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';

import * as Icons from './Icons';


import Table from '@tiptap/extension-table';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import TableRow from '@tiptap/extension-table-row';
import Gapcursor from '@tiptap/extension-gapcursor';
import Blockquote from '@tiptap/extension-blockquote';

import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import SuperscriptSharpIcon from '@mui/icons-material/SuperscriptSharp';
import HorizontalRuleSharpIcon from '@mui/icons-material/HorizontalRuleSharp';
import AddPhotoAlternateSharpIcon from '@mui/icons-material/AddPhotoAlternateSharp';
import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  Menu,
  MenuItem,
  Select,
  TextField,
  ToggleButton,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
// import Styles from './Editor.module.scss';
import './Editor.css';



export  function SimpleEditor() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [displaySize, setDisplaySize] = useState('12');
  const [font, setFont] = useState('Inter');
  const [highlightColor, setHighlightColor] = useState(null);
  const [image, setImage] = useState(null);
  const [allimage, setAllimage] = useState(null);
  const [color, setColor] = useState('');
  const [listType, setListType] = useState('bullet_list');
  const [recordedAudio, setRecordedAudio] = useState(null);
  const [inputStr, setInputStr] = useState('');
  const [showPicker, setShowPicker] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  const [alignment, setAlignment] = useState('left');
  const [clr, setClr] = useState('');
  const arrowRef = useRef(null);
  const handleSave = (tagname) => {
    setClr(tagname.color);
    editor.chain().focus().toggleHighlight({ color: tagname.color }).run();
    console.log(clr);

    console.log(tagname);
  };

  const handleColour = (tagname) => {
    setColor(tagname.color);
    editor.chain().focus().setMark('textStyle', { color: tagname.color }).run();
    console.log(color);
    console.log(tagname);
  };

  const toggleButtons = () => {
    setShowButtons((prevState) => !prevState); // Toggle button visibility
  };

  const arrowClose = useCallback(() => {
    toggleButtons();
  }, []);

  useEffect(() => {
    const handleBodyClick = (event) => {
      // Check if the clicked element is not part of the buttons or their container
      if (!event.target.closest('.hide-menu')) {
        arrowClose();
      }
    };

    return () => {
      document.body.removeEventListener('click', toggleButtons);
    };
  }, []);

  // useEffect(()=>{
  //  getImage()
  // },[])
  const CustomTableCell = TableCell.extend({
    // Add any custom functionality or overrides here
  });
  const onInputChange = (e) => {
    console.log(e.target.files[0]);
    setImage(e.target.files[0]);
  };

  async function handleUpload(e) {
    e.preventDefault();

    const formdata = new FormData();
    formdata.append('image', image);
    const result = await axios.post(
      'http://localhost:5000/api/save',
      formdata,
      {
        headers: { 'Content-Type': 'multipart/form-data' },
      }
    );
    console.log(result);
  }

  const editor = useEditor({
    extensions: [
      Document,
      History,
      Paragraph,
      Color,
      FontSize,
      HorizontalRule.configure({
        HTMLAttributes: {
          class: 'my-custom-class',
        },
      }),
      Heading,
      ListItem,
      BulletList,
      OrderedList,
      Superscript,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Image.configure({
        inline: true,
        allowBase64: true,
        class: 'my-custom-class',
      }),
      Highlight.configure({ multicolor: true }),
      TextStyle,
      Dropcursor,

      FontFamily.configure(),

      Text,
      Table.configure({
        cellContent: CustomTableCell,
        HTMLAttributes: {
          // Apply black border styling
          style: 'border: 1px solid black;',
        }, // Use your custom TableCell extension
      }),
      
      Blockquote.configure({
        HTMLAttributes: {
          style: 'border: 1px solid black;',
        },
      }),
      TableRow,
      TableHeader,
      TableCell.configure({
        HTMLAttributes: {
          style: 'border: 1px solid black;',
        },
      }),
      Gapcursor,

      Link.configure({
        openOnClick: false,
      }),
      Bold,
      Underline,
      Italic,
      Strike,
      Code,
    ],
    content: `
    <audio src=""></audio>
  `,
  });

  const fonts = {
    Arial: 'Arial',
    Verdana: 'Verdana',
    Helvetica: 'Helvetica',
    Tahoma: 'Tahoma',
    'Trebuchet MS': 'Trebuchet MS ',
    'Times New Roman': 'Times New Roman',
    Georgia: 'Georgia',
    Garamond: 'Garamond',
    'Courier New': 'Courier New',
    'Brush Script MT': 'Brush Script MT',
  };

  const supportedFontFamilies = [
    'Inter',
    'Comic Sans MS, Comic Sans',
    'serif',
    'monospace',
    'cursive',
    ...Object.values(fonts),
  ];

  // const handleAlignmentChange = (e) => {
  //   const alignment = e.target.value;
  //   editor.chain().focus().setTextAlign(alignment).run();
  // };

  const sizes = [
    '8',
    '9',
    '10',
    '11',
    '12',
    '14',
    '16',
    '18',
    '20',
    '24',
    '30',
    '36',
    '48',
    '60',
    '72',
    '96',
  ];

  const [modalIsOpen, setIsOpen] = useState(false);
  const [url, setUrl] = useState('');
  const onEmojiClick = (event, emojiObject) => {
    const newInput = inputStr
      ? inputStr + emojiObject.emoji
      : emojiObject.emoji;
    setInputStr(newInput);
    setShowPicker(false);
  };

  // Adjusting handleUpload to be used with addImage
  // async function handleUpload(file) {
  //   const formData = new FormData();
  //   formData.append('image', file);

  //   try {
  //     const result = await axios.post(
  //       'http://localhost:5000/api/save',
  //       formData,
  //       {
  //         headers: { 'Content-Type': 'multipart/form/data' },
  //       }
  //     );
  //     console.log(result);

  //     // Assuming your server responds with the URL in result.data.url
  //     if (result.data.url) {
  //       editor.chain().focus().setImage({ src: result.data.url }).run();
  //     }
  //   } catch (error) {
  //     console.error('Upload failed', error);
  //   }
  // }

  const addImage = useCallback(() => {
    const url = window.prompt('URL');

    if (url) {
      editor
        .chain()
        .focus()
        .setImage({ src: url, width: '300px', height: '200px' })
        .run();
    }
  }, [editor]);

  const handleColorChange = (e) => {
    setHighlightColor(e.target.value);
    console.log(highlightColor);
    editor.chain().focus().toggleHighlight({ color: highlightColor }).run();
  };
  const handleColor = (e) => {
    const selectedColor = e.target.value;
    setColor(selectedColor);
    editor.chain().focus().setMark('textStyle', { color: selectedColor }).run();
  };
  const insertTableCell = () => {
    editor
      .chain()
      .focus()
      .insertTable({ rows: 2, cols: 2, withHeaderRow: true })
      .run();
  };
  const insertBlockQuote = () => {
    editor.chain().focus().toggleBlockquote().run();
  };
  // const addImage = (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     // Implement your upload logic here. This example assumes a function uploadFile that handles the upload process and returns the URL.
  //     handleUpload(file);
  //   }
  // };
//   const handleRecordedAudio = (audioData) => {
//     setRecordedAudio(audioData);

//     // Ensure the editor is initialized and the audio data is valid
//     if (editor && audioData) {
//       // Convert the audio data to a valid data URL
//       const audioSrc = data:audio/wav;base64,${audioData};

//       // Insert the audio tag into the editor's content
//       editor
//         .chain()
//         .focus()
//         .insertContent(<audio controls src="${audioSrc}"></audio>)
//         .run();
//     }
//   };

//   useEffect(() => {
//     if (recordedAudio && editor) {
//       console.log('Recorded audio data:', recordedAudio);
//       editor
//         .chain()
//         .focus()
//         .insertContent(<audio controls src="${recordedAudio}"></audio>)
//         .run();
//     }
//   }, [recordedAudio, editor]);

  const openModal = useCallback(() => {
    setUrl(editor.getAttributes('link').href);
    setIsOpen(true);
  }, [editor]);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setUrl('');
  }, []);

  const saveLink = useCallback(() => {
    if (url) {
      editor
        .chain()
        .focus()

        .setLink({ href: url, target: '_blank' })
        .run();
    } else {
      editor.chain().focus().unsetLink().run();
    }
    closeModal();
  }, [editor, url, closeModal]);

  const removeLink = useCallback(() => {
    editor.chain().focus().extendMarkRange('link').unsetLink().run();
    closeModal();
  }, [editor, closeModal]);

  const toggleBold = useCallback(() => {
    editor.chain().focus().toggleBold().run();
  }, [editor]);

  const toggleUnderline = useCallback(() => {
    editor.chain().focus().toggleUnderline().run();
  }, [editor]);

  const toggleItalic = useCallback(() => {
    editor.chain().focus().toggleItalic().run();
  }, [editor]);

  const toggleStrike = useCallback(() => {
    editor.chain().focus().toggleStrike().run();
  }, [editor]);
  const increaseIndent = () => {
    editor.chain().focus().indent().run();
  };

  const decreaseIndent = () => {
    editor.chain().focus().outdent().run();
  };

  const toggleCode = useCallback(() => {
    editor.chain().focus().toggleCode().run();
  }, [editor]);

  const handleAlignmentChange = useCallback(
    (e) => {
      const alignment = e.target.value;
      setAlignment(alignment);
      editor.chain().focus().setTextAlign(alignment).run();
    },
    [editor]
  );

  const colorChange = useCallback(
    (e) => {
      editor.chain().focus().setColor(e.target.value).run();
    },
    [editor]
  );
 

  const addImageFromLocal = useCallback(() => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = () => {
      const file = input.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const src = URL.createObjectURL(file);
          console.log('Image URL:', extractImageUrl(src));
          editor
            .chain()
            .focus()
            .setImage({ src, style: 'width: 300px;' })
            .run();
        };
        reader.readAsDataURL(file);
      }
    };
  }, [editor]);

  const handleListTypeChange = (e) => {
    const action = e.target.value;
    if (action === 'toggleBulletList') {
      editor.chain().focus().toggleBulletList().run();
    } else if (action === 'toggleOrderedList') {
      editor.chain().focus().toggleOrderedList().run();
    }
  };
  const handleFontSizeChange = (event) => {
    const selectedSize = event.target.value;
    setDisplaySize(selectedSize);
    editor.chain().focus().setFontSize(`${selectedSize}px`).run();
  };

  const handleFontChange = (event) => {
    const selectedFont = event.target.value;
    setFont(selectedFont);
    editor
      .chain()
      .focus()
      .setFontFamily(`${selectedFont}` || '')
      .run();
  };
  const extractImageUrl = (blobUrl) => {
    // Extracting image URL from blob URL
    const parts = blobUrl.split('/');
    return parts[parts.length - 1];
  };


  if (!editor) {
    return null;
  }

  return (
    <div>
      <div className="editor">
        <div className="menu">
          <div className="menu2">
            <button
              className="menu-button"
              onClick={() => editor.chain().focus().undo().run()}
              disabled={!editor.can().undo()}
            >
              <Icons.RotateLeft />
            </button>

            <button
              className="menu-button"
              onClick={() => editor.chain().focus().redo().run()}
              disabled={!editor.can().redo()}
            >
              <Icons.RotateRight />
            </button>
            <ToggleButton
              style={{ padding: '0px', height: '20px', marginLeft: '10px' }}
              value="toggleBulletList"
              aria-label="Toggle Bullet List selection"
              onClick={() => editor.chain().focus().toggleBulletList().run()}
              selected={editor.isActive('bulletList')}
            >
              <FormatListBulleted style={{ fontSize: '20px' }} />
            </ToggleButton>
            <ToggleButton
              style={{ padding: '0px', height: '20px', marginLeft: '10px' }}
              value="toggleOrderedList"
              aria-label="Toggle Ordered List selection"
              onClick={() => editor.chain().focus().toggleOrderedList().run()}
              selected={editor.isActive('orderedList')}
            >
              <FormatListNumbered style={{ fontSize: '20px' }} />
            </ToggleButton>
            {/* <button
              className={classNames('menu-button', {
                'is-active': editor.isActive('link'),
              })}
              onClick={openModal}
            >
              <Icons.Link />
            </button> */}

            <button
              className={classNames('menu-button', {
                'is-active': editor.isActive('bold'),
              })}
              onClick={toggleBold}
            >
              <Icons.Bold />
            </button>
            <button
              className={classNames('menu-button', {
                'is-active': editor.isActive('underline'),
              })}
              onClick={toggleUnderline}
            >
              <Icons.Underline />
            </button>
            <button
              className={classNames('menu-button', {
                'is-active': editor.isActive('italic'),
              })}
              onClick={toggleItalic}
            >
              <Icons.Italic />
            </button>
            <button
              className={classNames('menu-button', {
                'is-active': editor.isActive('strike'),
              })}
              onClick={toggleStrike}
            >
              <Icons.Strikethrough />
            </button>
            <button
              className={classNames('menu-button', {
                'is-active': editor.isActive('code'),
              })}
              onClick={toggleCode}
            >
              <Icons.Code />
            </button>

            <button
              className={classNames('menu-button', {
                'is-active': editor.isActive('code'),
              })}
              onClick={addImageFromLocal}
            >
              <AddPhotoAlternateSharpIcon style={{ fontSize: 'larger' }} />
            </button>
          </div>
          {/* 
        <button>
          <input
            style={{ border: 'none' }}
            type="color"
            onChange={handleColorChange}
            value={highlightColor}
          ></input>
        </button> */}
          {/* <CreateTags onSave={handleSave} />
          <FontBg onSavee={handleColour} /> */}
          {/* <input type="color" onChange={handleColor} value={color} /> */}
          {/* <button onClick={() => handleMediaLibrary('attachment')}>
          Open attachment
        </button>
        <EditorContent editor={editor} />
        {mediaLibrary && (
          <MediaLibrary
            type={mediaLibrary}
            onSuccess={(attachement) => {
              if (mediaLibrary === 'attachment') {
                console.log('success', { attachement });
                editor?.chain().focus().setAttachment(attachement).run();
                handleMediaLibrary(null);
              }
            }}
            onClose={() => handleMediaLibrary(null)}
          />
        )} */}
          <Select
          sx={{width:"15%"}}
            value={font}
            onChange={handleFontChange}
            fullWidth
            variant="standard"
          >
            {supportedFontFamilies.map((font, index) => (
              <MenuItem key={index} value={font}>
                {font}
              </MenuItem>
            ))}
          </Select>
          <div className=".menu2">
            <FormControl
              className=".menu2"
              style={{ width: '100px' }}
              fullWidth
              variant="standard"
            >
              <Select
                style={{ marginTop: '3px',width:"100px" }}
                labelId="font-size-label"
                id="font-size-select"
                value={displaySize}
                onChange={handleFontSizeChange}
                fullWidth
                variant="standard"
              >
                {sizes.map((size) => (
                  <MenuItem key={size} value={size}>
                    {size}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          {/* <button
            onClick={toggleButtons}
            style={{ padding: '0px', border: 'none' }}
          >
            <ArrowDownwardTwoTone
              style={{
                color: 'currentcolor',
                height: '20px',
                paddingTop: '3px',
              }}
            />
          </button> */}
          {showButtons && (
            <div onClick={arrowClose}>
              <Box className="hide-menu">
                <Button
                  style={{ padding: '0px', color: 'currentcolor' }}
                  onClick={() =>
                    editor.chain().focus().toggleSuperscript().run()
                  }
                >
                  <SuperscriptSharpIcon style={{ fontSize: 'large' }} />
                </Button>

                <Button
                  style={{ padding: '0px', color: 'currentcolor' }}
                  onClick={insertTableCell}
                >
                  <TableViewSharpIcon style={{ fontSize: 'large' }} />
                </Button>
                <Button
                  style={{ padding: '0px', color: 'currentcolor' }}
                  onClick={insertBlockQuote}
                >
                  <FormatQuoteIcon style={{ fontSize: 'large' }} />
                </Button>
                <Button
                  style={{ padding: '0px', color: 'currentcolor' }}
                  onClick={() =>
                    editor.chain().focus().setHorizontalRule().run()
                  }
                >
                  <HorizontalRuleSharpIcon style={{ fontSize: 'large' }} />
                </Button>

                <Select
                  labelId="text-align-label"
                  id="text-align-select"
                  value={alignment}
                  onChange={handleAlignmentChange}
                  fullWidth
                  variant="standard"
                >
                  <MenuItem value="left">Left</MenuItem>
                  <MenuItem value="center">Center</MenuItem>
                  <MenuItem value="right">Right</MenuItem>
                  <MenuItem value="justify">Justify</MenuItem>
                </Select>
              </Box>
            </div>
          )}
          {/* <button onClick={increaseIndent}>Increase Indent</button>
        <button onClick={decreaseIndent}>Decrease Indent</button> */}
          {/* <div>
          <form onSubmit={handleUpload}>
            <input type="file" accept="image" onChange={onInputChange}></input>
            <button type="submit">Submit</button>
          </form>
          {allimage == null
            ? ''
            : allimage.map((data) => {
                return (
                  <div
                    style={{ position: 'absolute', left: '30px' }}
                    key={data._id}
                  >
                    <img
                      key={data._id}
                      src={require(./images/${data.image})}
                      alt={data.image}
                      height={150}
                      width={150}
                    />
                  </div>
                );
              })}
        </div> */}
        </div>
        <div className="menu2"></div>

        <BubbleMenu
          className="bubble-menu-light"
          tippyOptions={{ duration: 150 }}
          editor={editor}
          shouldShow={({ editor, view, state, oldState, from, to }) => {
            // only show the bubble menu for links.
            return from === to && editor.isActive('link');
          }}
        >
          <button className="button" onClick={openModal}>
            Edit
          </button>
          <button className="button-remove" onClick={removeLink}>
            Remove
          </button>
        </BubbleMenu>

        <EditorContent editor={editor} />
      </div>
</div>);
}